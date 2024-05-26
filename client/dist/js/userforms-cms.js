!function(){"use strict";var e={662:function(e,o,r){var t=c(r(754)),i=c(r(311)),d=c(r(363)),n=r(691),l=r(648),s=r(845),a=c(r(872)),m=c(r(902));function c(e){return e&&e.__esModule?e:{default:e}}const f=(0,l.loadComponent)("FormBuilderModal");i.default.entwine("ss",(e=>{function o(o,r,t){o?(e(r).show(),e(t).hide()):(e(t).show(),e(r).hide())}e("#Form_EditForm_Fields").entwine({onmatch(){this._super(),this.on("addnewinline",(()=>{this.one("reload",(()=>{this.find(".ss-gridfield-item").last().find(".col-ClassName select").attr("data-folderconfirmed",0)}))}))}}),e("#Form_ConfirmFolderForm_FolderOptions-new").entwine({onmatch(){e("#Form_ConfirmFolderForm_CreateFolder_Holder").detach().appendTo(e("#Form_ConfirmFolderForm_FolderOptions-new").parent().parent()),o(e(this).prop("checked"),"#Form_ConfirmFolderForm_CreateFolder_Holder","#Form_ConfirmFolderForm_FolderID_Holder")},onchange(){o(e(this).prop("checked"),"#Form_ConfirmFolderForm_CreateFolder_Holder","#Form_ConfirmFolderForm_FolderID_Holder")}}),e("#Form_ConfirmFolderForm_FolderOptions-existing").entwine({onmatch(){e("#Form_ConfirmFolderForm_FolderID_Holder").detach().appendTo(e("#Form_ConfirmFolderForm_FolderOptions-existing").parent().parent()),o(e(this).prop("checked"),"#Form_ConfirmFolderForm_FolderID_Holder","#Form_ConfirmFolderForm_CreateFolder_Holder")},onchange(){o(e(this).prop("checked"),"#Form_ConfirmFolderForm_FolderID_Holder","#Form_ConfirmFolderForm_CreateFolder_Holder")}}),e("#Form_ConfirmFolderForm_FolderID_Holder .treedropdownfield.is-open,#Form_ItemEditForm_FolderID .treedropdownfield.is-open").entwine({onunmatch(){const o=window.ss.config.adminUrl||"/admin/",r=a.default.parse((0,s.joinUrlPaths)(o,"user-forms/getfoldergrouppermissions")),t=m.default.parse(r.query);t.FolderID=e(this).find("input[name=FolderID]").val();const d=a.default.format({...r,search:m.default.stringify(t)});return fetch(d,{credentials:"same-origin"}).then((e=>e.json())).then((o=>(e(this).siblings(".form__field-description").html(o),e(this).parent().siblings(".form__field-description").html(o),o))).catch((e=>{i.default.noticeAdd({text:e.message,stay:!1,type:"error"})}))}}),e(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label:not([data-folderconfirmed='1'])").entwine({onchange(){if("SilverStripe\\UserForms\\Model\\EditableFormField\\EditableFileField"!==this.get(0).value)return;if(e(".uf-field-editor .ss-gridfield-items .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='1']").length)return;let o=e("#confirm-folder__dialog-wrapper");o.length&&o.remove(),o=e('<div id="confirm-folder__dialog-wrapper" />');const r=e(this).closest("tr").data("id");o.data("id",r),e("body").append(o),o.open()}}),e("#confirm-folder__dialog-wrapper").entwine({ReactRoot:null,onunmatch(){this._clearModal()},open(){this._renderModal(!0)},close(o){if(!o){const o=e("#confirm-folder__dialog-wrapper").data("id");e(`.ss-gridfield-item[data-id='${o}'] .dropdown.editable-column-field.form-group--no-label[data-folderconfirmed='0']`).val("SilverStripe\\UserForms\\Model\\EditableFormField\\EditableTextField")}this._renderModal(!1)},_renderModal(o){var r=this;const i=t.default._t("UserForms.FILE_CONFIRMATION_TITLE","Select file upload folder"),l=e(this).data("id"),c=window.ss.config.adminUrl||"/admin/",u=a.default.parse((0,s.joinUrlPaths)(c,"user-forms/confirmfolderformschema")),F=m.default.parse(u.query);F.ID=l;const p=a.default.format({...u,search:m.default.stringify(F)});let _=this.getReactRoot();_||(_=(0,n.createRoot)(this[0]),this.setReactRoot(_)),_.render(d.default.createElement(f,{title:i,isOpen:o,onSubmit:function(){return r._handleSubmitModal(...arguments)},onClosed:function(){return r._handleHideModal(...arguments)},schemaUrl:p,bodyClassName:"modal__dialog",className:"confirm-folder-modal",responseClassBad:"modal__response modal__response--error",responseClassGood:"modal__response modal__response--good",identifier:"UserForms.ConfirmFolder"}))},_clearModal(){const e=this.getReactRoot();e&&(e.unmount(),this.setReactRoot(null))},_handleHideModal(){return this.close()},_handleSubmitModal(o,r,d){return d().then((()=>{i.default.noticeAdd({text:t.default._t("UserForms.FILE_CONFIRMATION_CONFIRMATION","Folder confirmed successfully."),stay:!1,type:"success"}),this.close(!0),e("[name=action_doSave], [name=action_save]").click()})).catch((e=>{i.default.noticeAdd({text:e.message,stay:!1,type:"error"})}))}}),e("#Form_ConfirmFolderForm_action_cancel").entwine({onclick(){e("#confirm-folder__dialog-wrapper").close()}})}))},299:function(e,o,r){var t;((t=r(311))&&t.__esModule?t:{default:t}).default.entwine("ss",(e=>{let o=null;e(".uf-field-editor .ss-gridfield-items").entwine({onmatch(){let r=0,t=0;const i=e(".uf-field-editor .ss-gridfield-buttonrow").addClass("sticky-buttons"),d=e(".cms-content-header").first().height()+parseInt(e(".sticky-buttons").css("padding-top"),10),n=e(".uf-field-editor");this._super(),this.find(".ss-gridfield-item").each(((o,i)=>{switch(e(i).data("class")){case"SilverStripe\\UserForms\\Model\\EditableFormField\\EditableFormStep":return void(t=0);case"SilverStripe\\UserForms\\Model\\EditableFormField\\EditableFieldGroup":t+=1,r=t;break;case"SilverStripe\\UserForms\\Model\\EditableFormField\\EditableFieldGroupEnd":r=t,t-=1;break;default:r=t}e(i).toggleClass("infieldgroup",r>0);for(let o=1;o<=5;o++)e(i).toggleClass(`infieldgroup-level-${o}`,r>=o)})),o=setInterval((()=>{const e=n.offset().top;i.width("100%"),e>d||0===e?i.removeClass("sticky-buttons"):i.addClass("sticky-buttons")}),300)},onunmatch(){this._super(),clearInterval(o)}}),e(".uf-field-editor .ss-gridfield-buttonrow .action").entwine({onclick(e){this._super(e),this.trigger("addnewinline")}}),e(".uf-field-editor").entwine({onmatch(){this._super(),this.on("addnewinline",(()=>{this.one("reload",(()=>{let o=this.find(".ss-gridfield-item").last(),r=null;"SilverStripe\\UserForms\\Model\\EditableFormField\\EditableFieldGroupEnd"===o.attr("data-class")?(r=o,r.prev().find(".col-Title input").focus(),o=r.add(r.prev()),r.css("visibility","hidden")):o.find(".col-Title input").focus(),o.addClass("flashBackground");const t=e(".cms-content-fields");t.length>0&&t.scrollTop(t[0].scrollHeight),r&&r.css("visibility","visible")}))}))},onummatch(){this._super()}})}))},519:function(e,o,r){var t;((t=r(311))&&t.__esModule?t:{default:t}).default.entwine("ss",(e=>{const o=()=>{const o=e('input[name="SendPlain"]').is(":checked");e(".field.toggle-html-only")[o?"hide":"show"](),e(".field.toggle-plain-only")[o?"show":"hide"]()};e("#Form_ItemEditForm .EmailRecipientForm").entwine({onmatch:()=>{o()},onunmatch:()=>{(void 0)._super()}}),e('#Form_ItemEditForm .EmailRecipientForm input[name="SendPlain"]').entwine({onchange:()=>{o()}})}))},648:function(e){e.exports=Injector},872:function(e){e.exports=NodeUrl},363:function(e){e.exports=React},691:function(e){e.exports=ReactDomClient},754:function(e){e.exports=i18n},311:function(e){e.exports=jQuery},902:function(e){e.exports=qs},845:function(e){e.exports=ssUrlLib}},o={};function r(t){var i=o[t];if(void 0!==i)return i.exports;var d=o[t]={exports:{}};return e[t](d,d.exports,r),d.exports}r(299),r(662),r(519)}();