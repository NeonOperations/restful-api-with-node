
 exports =  {

    // dom id for main content
    theList : [ 'ods','cds','srf']
    ,
    ShowIt : (id) => {
        let hash = '#' + id;
        this.HideAll();
        $(hash).show();
    }
    ,
     HideIt : (id) => {
        $("#" + id).hide();
    }
    ,
     HideAll : () => {
        this.theList.forEach(function (id) {
           this.HideIt(id);
        });
    }
    ,
     ShowODS : () => {
        this.ShowIt('ods');
    }
    ,
     ShowCDS : () => {
        this.ShowIt('cds');
    }
    ,
     ShowSRF : () => {
       this.ShowIt('srf');
    }
};

