export default class Table {

    constructor(idContainer, idTable, columns) {
        this.idContainer = idContainer;
        this.idTable = idTable;
        this.columns = columns;
    }

    removeTable(id) {
        $('#' + id).html("");
    }

    remove() {
        $('#' + this.idTable).html("");
    }

    createTable(idContainer, idTable, cols, data, prepended) {

        this.idContainer = idContainer;
        this.idTable = idTable;
        this.columns = cols;
        let tbl =  (prepended || '') +'<table id="' + idTable + '" class="table table-striped table-bordered" cellspacing="0" width="100%"></table>';
        $('#' + idContainer).append(tbl);
        $('#' + idTable).DataTable({
            data: data,
            columns: cols,
            "order": []
        });

        return tbl;
    }

    replace (data) {
        this.removeTable(this.idContainer);
        this.createTable(this.idContainer, this.idTable, this.columns, data);
    }

}

