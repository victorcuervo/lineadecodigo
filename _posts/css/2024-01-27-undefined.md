---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW5PZHX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEl3ptTKZ7Y3PUcSdoh%2F3UINgNGVtFdDsR3u2eHpfgTmAiBD109E%2FdpC3Naue3r%2FVR6vmJHP2KU0qre%2F2XXwSKiS2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6VoUMVe2h%2F%2Bo3TFeKtwDCTy72tHL8akiyto%2B7VnKXSPwzWU1EeqGV1yN8g1cJ7vXxz979ak0OELK3WlhmdWUZkl8CM5%2FS%2FdcBGGPchjHK7F8nFiaRFKx2rHgLoN1xYw58ZVl7h4i%2BFIjbMhPDQeunbhIsAG2O5rapMP3D67NwPXi2Yzb5SaI4BSzSfWub%2BoauVQCmGio5DpB98HyK%2Fw2SwxMeS%2Bz54w0KoprR%2FClXX2AD9pBE7fJsgagMw6jTmQDu9SINkPASN%2BRBAfdaKTWVR5%2BkScGokMKdJ65eTUxsHQrMSEzKC%2B%2FhPd%2FfsoQbePvUKrWeK3GePKRFno0%2BE4v23EXRQYejglE1dLX%2FB0exN%2F9nyDe8iZD1ILHR2rHlJ53iOdFRA1baOdDxyP9knVJWWS75qG7HN4K8o0j6UqAwHRKoj4cK6ea6ucIphVNqRYJk2xCuipsMRB1%2F0qQtDiRk8PdzqU066srVU9HzhYdxX0ICyXWTpQRwPepbYDuqtFUvHBxHgzF%2FET8eFdHSjpJnOlcaK0%2BtZh%2BrTK%2BmPho1umgr0IHzmWW%2BbULS4ojBMir8gOxcWbzoefFXOstQroRdL3iLoWgqeZ0kYN95bYJaX8U3jIb3%2BbK%2BRY7YzBBCyXbciWU8DumK5Sekjow4JW%2ByQY6pgHudAHNYaxRaX6%2Bu2cDbgJwdqK8leyb%2FScdKu11JJn3qc1pLWeXuNUsl3puUFaw7OM0P%2BZVuxGKE0DELJ%2B2uzYaYOCVj%2F1KiuLX4q40JoCb2m2HGndIBKu7Shs8yWhAPV7y0r9U6At33CWxsX8dyUYJyubIAxMvnsk0pe%2FquscqPZD8LSllvGRzpsvcFyjY0AeSanE%2F0LBazIk6Gs3oV0Xn3Ozfv4eK&X-Amz-Signature=39e0236a83f7e79b08a4bafb0e539bdc84ae57e818ffd9d9ab1c6d9aecd7f4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW5PZHX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEl3ptTKZ7Y3PUcSdoh%2F3UINgNGVtFdDsR3u2eHpfgTmAiBD109E%2FdpC3Naue3r%2FVR6vmJHP2KU0qre%2F2XXwSKiS2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6VoUMVe2h%2F%2Bo3TFeKtwDCTy72tHL8akiyto%2B7VnKXSPwzWU1EeqGV1yN8g1cJ7vXxz979ak0OELK3WlhmdWUZkl8CM5%2FS%2FdcBGGPchjHK7F8nFiaRFKx2rHgLoN1xYw58ZVl7h4i%2BFIjbMhPDQeunbhIsAG2O5rapMP3D67NwPXi2Yzb5SaI4BSzSfWub%2BoauVQCmGio5DpB98HyK%2Fw2SwxMeS%2Bz54w0KoprR%2FClXX2AD9pBE7fJsgagMw6jTmQDu9SINkPASN%2BRBAfdaKTWVR5%2BkScGokMKdJ65eTUxsHQrMSEzKC%2B%2FhPd%2FfsoQbePvUKrWeK3GePKRFno0%2BE4v23EXRQYejglE1dLX%2FB0exN%2F9nyDe8iZD1ILHR2rHlJ53iOdFRA1baOdDxyP9knVJWWS75qG7HN4K8o0j6UqAwHRKoj4cK6ea6ucIphVNqRYJk2xCuipsMRB1%2F0qQtDiRk8PdzqU066srVU9HzhYdxX0ICyXWTpQRwPepbYDuqtFUvHBxHgzF%2FET8eFdHSjpJnOlcaK0%2BtZh%2BrTK%2BmPho1umgr0IHzmWW%2BbULS4ojBMir8gOxcWbzoefFXOstQroRdL3iLoWgqeZ0kYN95bYJaX8U3jIb3%2BbK%2BRY7YzBBCyXbciWU8DumK5Sekjow4JW%2ByQY6pgHudAHNYaxRaX6%2Bu2cDbgJwdqK8leyb%2FScdKu11JJn3qc1pLWeXuNUsl3puUFaw7OM0P%2BZVuxGKE0DELJ%2B2uzYaYOCVj%2F1KiuLX4q40JoCb2m2HGndIBKu7Shs8yWhAPV7y0r9U6At33CWxsX8dyUYJyubIAxMvnsk0pe%2FquscqPZD8LSllvGRzpsvcFyjY0AeSanE%2F0LBazIk6Gs3oV0Xn3Ozfv4eK&X-Amz-Signature=0f084c10769e304e87f4e3d84d73edea5dc13ecfbb0e65f65b7f46868369c62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

