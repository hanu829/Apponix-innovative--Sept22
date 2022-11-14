function random() {
    var myran = Math.floor(Math.random() * 7 + 1);
    //(document.getElementById('root') as HTMLDivElement).innerHTML=myran as any
    switch (myran) {
        case 1:
            document.getElementById('root').innerHTML = 'monday';
            break;
        case 2:
            document.getElementById('root').innerHTML = 'tuesday';
            break;
        case 3:
            document.getElementById('root').innerHTML = 'wednesday';
            break;
        case 4:
            document.getElementById('root').innerHTML = 'thursday';
            break;
        case 5:
            document.getElementById('root').innerHTML = 'friday';
            break;
        case 6:
            document.getElementById('root').innerHTML = 'saturday';
            break;
        case 7:
            document.getElementById('root').innerHTML = 'holiday';
            break;
    }
}
