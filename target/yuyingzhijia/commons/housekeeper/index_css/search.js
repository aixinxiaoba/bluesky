$(function(){
		$("#index-search").click(function(){
		document.searcform_new.submit();
	})
	$("#index-search-key").click(function()
	{
		if($(this).val()=='��ɩ')
		{
		   $(this).val('');
		}
		$("#searchdmenu").show();
	})
	$("#index-search-key").blur(function()
	{
	 if($(this).val()=='')
	 {
		   $(this).val('��ɩ');
	 }
	 $("#searchdmenu").hide(500);
	 
	})
		   })
	function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}