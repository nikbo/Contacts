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
    respond_to do |format|
    format.html { redirect_to contacts_path}
    format.js
    end
  end

  def index
    @contacts = Contact.order(:name)
    if @contacts.length <= 30
      @contact = @contacts
    else
      @contact = @contacts[0..29]
    end
  end

  def time
    @cont=params[:t].to_i
    @contacts = Contact.order(:name)
    @i=0
    @contacts.each do |contact|

       if contact.id == @cont
      break
       end
       @i+=1
    end
    if @contacts[@i+1..@i+30].length == 30
    @contact=@contacts[@i+1..@i+30]
    else
      @contact=@contacts[@i+1..@i+1+@contacts[@i+1..@i+30].length]
      end

    respond_to do |format|
        format.html { redirect_to contacts_path }
        format.js

    end

  end


end