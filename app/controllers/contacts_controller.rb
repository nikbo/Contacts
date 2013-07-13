# coding: utf-8
class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])

    if @contact.save
      flash[:notice] = "Ваш контакт успешно создан!"
      redirect_to contacts_path
    else
      render :new
    end

  end

  def edit
    @contact = Contact.find(params[:id])
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update_attributes(params[:contact])
      flash[:notice] = "Ваш контакт успешно изменен!"
      redirect_to contacts_path
    else
      render :edit
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    flash[:notice] = "Ваш контакт успешно удален"
    respond_to do |format|
    format.html { redirect_to contacts_path}
    format.js
    end
  end

  def index
    @contact = Contact.order(:name)
    @contacts = @contact[0..7]
  end

  def time
    #render :text => "The current time is #{Time.now.to_s}"
    respond_to do |format|
      format.html { redirect_to :index }
      format.js # рендрит и исполняет в браузере time.js.erb
    end
  end

end