'use strict';var Popover=(function(){var $popover=$('[data-toggle="popover"]');function init($this){var popoverClass='';if($this.data('color')){popoverClass=' popover-'+$this.data('color')}
var options={trigger:'focus',template:'<div class="popover'+popoverClass+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'};$this.popover(options)}
if($popover.length){$popover.each(function(){init($(this))})}})();'use strict';var Tooltip=(function(){var $tooltip=$('[data-toggle="tooltip"]');function init(){$tooltip.tooltip()}
if($tooltip.length){init()}})();var CopyType=(function(){var $element='.btn-type-clipboard',$btn=$($element);function init($this){$this.tooltip().on('mouseleave',function(){$this.tooltip('hide')});var clipboard=new ClipboardJS($element);clipboard.on('success',function(e){$(e.trigger).attr('title','Copied!').tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle')
e.clearSelection()})}
if($btn.length){init($btn)}})();'use strict';var FormControl=(function(){var $input=$('.form-control'),$indeterminateCheckbox=$('[data-toggle="indeterminate"]');function init($this){$this.on('focus blur',function(e){$(this).parents('.form-group').toggleClass('focused',(e.type==='focus'))}).trigger('blur')}
if($input.length){init($input)}
if($indeterminateCheckbox.length){$indeterminateCheckbox.each(function(){$(this).prop('indeterminate',!0)})}})();var CustomInputFile=(function(){var $customInputFile=$('.custom-input-file');function change($input,$this,$e){var fileName,$label=$input.next('label'),labelVal=$label.html();if($this&&$this.files.length>1){fileName=($this.getAttribute('data-multiple-caption')||'').replace('{count}',$this.files.length)}else if($e.target.value){fileName=$e.target.value.split('\\').pop()}
if(fileName){$label.find('span').html(fileName)}else{$label.html(labelVal)}}
function focus($input){$input.addClass('has-focus')}
function blur($input){$input.removeClass('has-focus')}
if($customInputFile.length){$customInputFile.each(function(){var $input=$(this);$input.on('change',function(e){var $this=this,$e=e;change($input,$this,$e)});$input.on('focus',function(){focus($input)}).on('blur',function(){blur($input)})})}})();var NavbarSticky=(function(){var $nav=$('.navbar-sticky'),navOffsetTop=0,scrolling=!1;function init($this){var scrollTop=$(window).scrollTop(),navHeight=$this.outerHeight();if(scrollTop>(navOffsetTop+200)){$this.addClass('sticky');$("body").css("padding-top",navHeight+"px")}else{$this.removeClass('sticky');$("body").css("padding-top","0")}}
if($nav.length){navOffsetTop=$nav.offset().top;$(window).on({'scroll':function(){scrolling=!0;setInterval(function(){if(scrolling){scrolling=!1;init($nav)}},250)}})}})();'use strict';var Highlight=(function(){var $highlight=$('.highlight');function init(i,block){var btnHtml='<button class="action-item btn-clipboard" title="Copy to clipboard"><i data-feather="copy"></i></button>'
$(block).before(btnHtml)
$('.btn-clipboard').tooltip().on('mouseleave',function(){$(this).tooltip('hide')});var clipboard=new ClipboardJS('.btn-clipboard',{target:function(trigger){return trigger.nextElementSibling}})
clipboard.on('success',function(e){$(e.trigger).attr('title','Copied!').tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle')
e.clearSelection()})
clipboard.on('error',function(e){var modifierKey=/Mac/i.test(navigator.userAgent)?'\u2318':'Ctrl-'
var fallbackMsg='Press '+modifierKey+'C to copy'
$(e.trigger).attr('title',fallbackMsg).tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle')})
hljs.highlightBlock(block)}
$highlight.each(function(i,block){init(i,block)})})()