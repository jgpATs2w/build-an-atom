// Copyright 2002-2013, University of Colorado

/**
 * Main model class for the first tab of the Build an Atom simulation.
 */
define( function ( require ) {

  var SharedConstants = require( 'common/SharedConstants' );
  var Utils = require( 'common/Utils' );
  var Atom = require( 'model/Atom' );
  var Particle = require( 'model/Particle' );
  var Bucket = require( 'PHETCOMMON/model/Bucket' );
  var Dimension2 = require( 'DOT/Dimension2' );

  var NUM_PROTONS = 10;
  var PROTON_COLOR = "red";
  var NUM_NEUTRONS = 13;
  var NEUTRON_COLOR = "gray";
  var NUM_ELECTRONS = 10;
  var ELECTRON_COLOR = "blue";
  var NUCLEON_CAPTURE_RADIUS = 100;
  var ELECTRON_CAPTURE_RADIUS = Atom.OUTER_ELECTRON_SHELL_RADIUS * 1.1;
  var BUCKET_WIDTH = 150;
  var BUCKET_HEIGHT = BUCKET_WIDTH * 0.6;

  /**
   * Constructor for main model object.
   *
   * @constructor
   */
  function BuildAnAtomModel() {

    this.atom = new Atom( 0, 0 );

    this.buckets = {
      protonBucket: new Bucket(
          {
            x: -200,
            y: 300,
            size: new Dimension2( BUCKET_WIDTH, BUCKET_HEIGHT ),
            baseColor : 'red',
            caption: 'Protons',
            captionColor: 'white'
          }
      ),
      neutronBucket: new Bucket(
          {
            x: 0,
            y: 300,
            size: new Dimension2( BUCKET_WIDTH, BUCKET_HEIGHT ),
            baseColor : '#e0e0e0',
            caption: 'Neutrons',
            captionColor: 'white'
          }
      ),
      electronBucket: new Bucket(
          {
            x: 200,
            y: 300,
            size: new Dimension2( BUCKET_WIDTH, BUCKET_HEIGHT ),
            baseColor : 'blue',
            caption: 'Electrons',
            captionColor: 'white'
          }
      )
    };

    this.nucleons = [];
    this.electrons = [];
    var model = this;

    // Add the protons.
    _.times( NUM_PROTONS, function () {
      var proton = new Particle( model.buckets.protonBucket.x, model.buckets.protonBucket.y, PROTON_COLOR, SharedConstants.NUCLEON_RADIUS, "proton" );
      model.nucleons.push( proton );
//      model.buckets.protonBucket.addParticleFirstOpen( proton );
    } );

    // Add the neutrons.
    _.times( NUM_NEUTRONS, function () {
      var neutron = new Particle( model.buckets.neutronBucket.x, model.buckets.protonBucket.y, NEUTRON_COLOR, SharedConstants.NUCLEON_RADIUS, "neutron" );
      model.nucleons.push( neutron );
//      model.buckets.neutronBucket.addParticleFirstOpen( neutron );
    } );

    // Add the electrons.
    _.times( NUM_ELECTRONS, function () {
      var electron = new Particle( model.buckets.electronBucket.x, model.buckets.electronBucket.y, ELECTRON_COLOR, SharedConstants.ELECTRON_RADIUS, "electron" );
      model.electrons.push( electron );
//      model.buckets.electronBucket.addParticleFirstOpen( electron );
    } );
  }

  return BuildAnAtomModel;
} );
