viewSearch();

$( '#search-submit' ).click( viewResults );
$( '#search-container' ).submit( function( event ) {
    viewResults();
    event.preventDefault();
});

$( '#zipcode-submit' ).click( function() {
    $( '#doctors-container' ).submit();
});
$( '#doctors-container' ).submit( function( event ) {
    viewDoctors();
    event.preventDefault();
});

$( '.btn-negative' ).click( viewDoctors );
$( '#btn-search' ).click( viewSearch );

function viewSearch() {
    $( '#view-search' ).show();
    $( '#view-doctors' ).hide();
    $( '#view-results' ).hide();
    $( '#navbar' ).hide();
    $( 'body' ).addClass( 'nice' );
}

function viewDoctors() {
    var zipcode = $( '#zipcode' ).val();

    $( '#view-search' ).hide();
    $( '#view-doctors' ).show();
    $( '#view-results' ).hide();
    $( '#navbar' ).show();
    $( 'body' ).removeClass( 'nice' );

    if( zipcode ) {
        $( '#navbar .title' ).html( 'Doctors @ ' + zipcode );
    } else {
        $( '#navbar .title' ).html( 'Doctors' );
    }

    stuffHospital( 44685 );
}

function viewResults() {
    var search = $( '#search-bar' ).val();

    $( '#view-search' ).hide();
    $( '#view-doctors' ).hide();
    $( '#view-results' ).show();
    $( '#navbar' ).show();
    $( 'body' ).removeClass( 'nice' );

    $( '#navbar .title' ).html( 'Search: <em>' + search + '</em>' );

    sourceWebMD( search );
    sourceHealthLine( search );
}

function filterInfo( info ) {
    if( info != null && info.html().length < 100 ) {
        info = null;
    }
    $( info ).find( 'a' ).each( function() {
        $( this ).attr( 'target', '_system' );
    });
    $( info ).find( '.lh-read-more' ).hide();
    return info;
}