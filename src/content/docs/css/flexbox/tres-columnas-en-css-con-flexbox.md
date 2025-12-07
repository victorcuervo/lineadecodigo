---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XIBBMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCitJR%2Bwkmrq9Qsvb4c7GimqDyTFakrW0CwbPFa5QUs5QIgHojxKm1KR2I56Q57%2FUXX12%2FAJ5YULzhru2nBXpXiRrYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDKdhMBAELaZhimwCrcA0D4T7RINYn5ThRlaT4dw7mLJAKNnh4iNcsOdD3mEpGpxcPXKdshdhShAq8W3AIgI0RcGFb05nQM0n15FEY1z7VHCpDv9hQYtQz%2B%2BDFUe%2BshH8rSYGVvhbruZtgvY5o1SuKAxnq6c0JT6ySF5Oq3oHt9WpkVaexlPbWEc7aqMxrRPV67cytvUF%2BNLPJqPWNx1yet%2BWFgDnh2Yz0MKaKc7JIvpOwecmL8TcnY93391qhYrioVH1vQbH7FAUnEdI1enG2QfPdVGTdzwlLwsOgEy3xzczpdVE1SPaD8k6P20ul3cvWIr%2FvPN2FNEQ8CFQqWGvTbbjJnzMZ9gZpLNpbxI7bJStbx%2FrBktLT1Ysbezr1Rv%2FrLqfMOyxYFUfZOLShqwpneAyewFM4Rwb2PKpU1ShFxRTWCjIaPMO48QmtXdxskFwd3E%2FcBLwt5Pz2EQiibTGEiWDqdtcWNuZE0yr0UUBVDEeMwn%2BUfg7NOGMUWzBt%2FF4HsC1H5vhoVoMGJ3VaOT6nhrUjnwP0IFk7FYdH74Y4YfzaOqhu9iVxsu8p5w7g6Iatn%2B70v6tZ%2FbmqcTGRs7b3rqqbYPvnCYr7jwTweKonkYqtTybOCqSoDRDh8DUCmTqv6ySGR3wKuiFouMNT90skGOqUBcmZGcy1%2F3rhL45NLlUnNd3opCCHWiW%2B2PgNV2LMi1R3k1CHAs5I5%2B%2FKhKJDxrdnz8hQ4oQifCyypgkpBtqrEgAuuXEroeTIv5s7suIzlRT%2BKpNFQNrxvJJ0xgVIyS45R7EGznK4DqJ4%2BDUZPh4KyS0Wi6p0RO74aSGDqqN7BtBEDdo54SmNR1bCCTGJiCsV%2B3hUeDTeFgIka3%2FNd4xTh4%2BV0rp1V&X-Amz-Signature=26ddec472fa02baef5a3320a3f10e69ec688f9357a1f46a23b9a84faf5f3c1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XIBBMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCitJR%2Bwkmrq9Qsvb4c7GimqDyTFakrW0CwbPFa5QUs5QIgHojxKm1KR2I56Q57%2FUXX12%2FAJ5YULzhru2nBXpXiRrYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDKdhMBAELaZhimwCrcA0D4T7RINYn5ThRlaT4dw7mLJAKNnh4iNcsOdD3mEpGpxcPXKdshdhShAq8W3AIgI0RcGFb05nQM0n15FEY1z7VHCpDv9hQYtQz%2B%2BDFUe%2BshH8rSYGVvhbruZtgvY5o1SuKAxnq6c0JT6ySF5Oq3oHt9WpkVaexlPbWEc7aqMxrRPV67cytvUF%2BNLPJqPWNx1yet%2BWFgDnh2Yz0MKaKc7JIvpOwecmL8TcnY93391qhYrioVH1vQbH7FAUnEdI1enG2QfPdVGTdzwlLwsOgEy3xzczpdVE1SPaD8k6P20ul3cvWIr%2FvPN2FNEQ8CFQqWGvTbbjJnzMZ9gZpLNpbxI7bJStbx%2FrBktLT1Ysbezr1Rv%2FrLqfMOyxYFUfZOLShqwpneAyewFM4Rwb2PKpU1ShFxRTWCjIaPMO48QmtXdxskFwd3E%2FcBLwt5Pz2EQiibTGEiWDqdtcWNuZE0yr0UUBVDEeMwn%2BUfg7NOGMUWzBt%2FF4HsC1H5vhoVoMGJ3VaOT6nhrUjnwP0IFk7FYdH74Y4YfzaOqhu9iVxsu8p5w7g6Iatn%2B70v6tZ%2FbmqcTGRs7b3rqqbYPvnCYr7jwTweKonkYqtTybOCqSoDRDh8DUCmTqv6ySGR3wKuiFouMNT90skGOqUBcmZGcy1%2F3rhL45NLlUnNd3opCCHWiW%2B2PgNV2LMi1R3k1CHAs5I5%2B%2FKhKJDxrdnz8hQ4oQifCyypgkpBtqrEgAuuXEroeTIv5s7suIzlRT%2BKpNFQNrxvJJ0xgVIyS45R7EGznK4DqJ4%2BDUZPh4KyS0Wi6p0RO74aSGDqqN7BtBEDdo54SmNR1bCCTGJiCsV%2B3hUeDTeFgIka3%2FNd4xTh4%2BV0rp1V&X-Amz-Signature=0af1565e2f6de74edf43a87755edadc0b4a0b69fae28a588dfb2c6b0a8665fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

