angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('panel.principal', {
    url: '/principal',
    views: {
      'side-menu21': {
        templateUrl: 'templates/principal.html',
        controller: 'principalCtrl'
      }
    }
  })

  .state('panel.dietas', {
    url: '/dietas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dietas.html',
        controller: 'dietasCtrl'
      }
    }
  })

  .state('panel.lugares', {
    url: '/lugares',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lugares.html',
        controller: 'lugaresCtrl'
      }
    }
  })

  .state('panel', {
    url: '/menu',
    templateUrl: 'templates/panel.html',
    abstract:true
  })

  .state('inicio', {
    url: '/',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('logear', {
    url: '/logear',
    templateUrl: 'templates/logear.html',
    controller: 'logearCtrl'
  })

  .state('panel.ajustes', {
    url: '/ajustes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'
      }
    }
  })

  .state('panel.retos', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/retos.html',
        controller: 'retosCtrl'
      }
    }
  })

  .state('registrarse', {
    url: '/registrarse',
    templateUrl: 'templates/registrarse.html',
    controller: 'registrarseCtrl'
  })

  .state('registrarse2', {
    url: '/registrarse2',
    templateUrl: 'templates/registrarse2.html',
    controller: 'registrarse2Ctrl'
  })

  .state('monitoreo', {
    url: '/monitoreo',
    templateUrl: 'templates/monitoreo.html',
    controller: 'monitoreoCtrl'
  })

  .state('panel.eMPEZAREJERCICIO', {
    url: '/empezarEjercicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eMPEZAREJERCICIO.html',
        controller: 'eMPEZAREJERCICIOCtrl'
      }
    }
  })

  .state('panel.aPRENDIZAJE', {
    url: '/aprendizaje',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aPRENDIZAJE.html',
        controller: 'aPRENDIZAJECtrl'
      }
    }
  })

  .state('panel.lOGROSALCANZADOS', {
    url: '/logrosAlcanzados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lOGROSALCANZADOS.html',
        controller: 'lOGROSALCANZADOSCtrl'
      }
    }
  })

  .state('secciNDeDietas', {
    url: '/dietasSeccion',
    templateUrl: 'templates/secciNDeDietas.html',
    controller: 'secciNDeDietasCtrl'
  })

  .state('panel.ubicaciones', {
    url: '/mapitas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicioMapita.html'
      }
    }
  })

  .state('menus', {
    url: '/menu',
    templateUrl: 'templates/menus.html',
    controller: 'menusCtrl'
  })
  
    .state('rutina', {
    url: '/rutina',
    templateUrl: 'templates/rutina.html',
    controller: 'rutinaCtrl'
  })

  .state('catLogo', {
    url: '/catalogo',
    templateUrl: 'templates/catLogo.html',
    controller: 'catLogoCtrl'
  })

  .state('estiramiento', {
    url: '/estiramiento1',
    templateUrl: 'templates/estiramiento.html',
    controller: 'estiramientoCtrl'
  })

  .state('estiramiento2', {
    url: '/estiramiento2',
    templateUrl: 'templates/estiramiento2.html',
    controller: 'estiramiento2Ctrl'
  })

  .state('estiramiento3', {
    url: '/estirar3',
    templateUrl: 'templates/estiramiento3.html',
    controller: 'estiramiento3Ctrl'
  })

  .state('zancadas', {
    url: '/zancadas',
    templateUrl: 'templates/zancadas.html',
    controller: 'zancadasCtrl'
  })

  .state('flexiones', {
    url: '/flexiones',
    templateUrl: 'templates/flexiones.html',
    controller: 'flexionesCtrl'
  })

  .state('twistRuso', {
    url: '/twist',
    templateUrl: 'templates/twistRuso.html',
    controller: 'twistRusoCtrl'
  })
  
  
    
  
  .state('panel.finalizarRutina',{
    url: '/principal',
    views: {
      'side-menu21': {
        templateUrl: 'templates/principal.html',
        controller: 'principalCtrl'
      }
    }      
  })
  
  .state('panel.mapas', {
    url: '/mapas',
    templateUrl: 'templates/inicioMapita.html'
      
    
  })
  
  .state('inicioMapita', {
    url: '/inicioMapita',
    templateUrl: 'templates/inicioMapita.html'
  });

  
  
$urlRouterProvider.otherwise('/')

  

});