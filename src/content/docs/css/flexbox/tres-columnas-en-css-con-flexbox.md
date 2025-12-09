---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMWBCL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbRXgR%2F%2BsIlPSY60aK9daxFEgES0wkRn%2Bfj%2B%2BocSuhUAIgbGnko3%2BJl%2FRSQjhCNH2dZmrDDwx8B56f8aeIsRMhxQgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHvDqfhkYQEzfsxOyrcAzQfABXMXRGM7o6me2PHWhxvXjgtqedI1HqYE75EZ%2F%2FwJCiMe0K1UsltIiEg09PhlCqO0yloMAxZEX9LZ%2FUObU4olAh4sg7CN9wBOWzx4h%2B3c7oMTgO%2B6gEl%2FWKIdnkfby09WdYG2Javx0FovQbqTHz26HiBEKv0Q8AZpp3Ow09XMLW4YwUpB%2BeOvjERhGTX4PfPJaTD%2B9Kq00lbMKp7YJ97VrHHczgx9bRgTX7OWjj6Ntzf%2FGo%2FgbLW0%2BCo3IG7JAEWv0znk8kvYiXa%2Bd7pSv4YSBJ6yPpVSIeMXWKQywfrLAIKyuEkCTlfehy9LeeNBw8Sa2jf5%2FZ98%2Fr2x8HsOKcOx1fh9mvaw%2Bc07ZigPegK24rsfYP8wQBhFxOyMsmWi419hi9tiN5Mmm%2BtXgbObqsTlsvTTFXd5IZ0dCGK%2FG7raHaJuXqr9ussQTntmiE%2FFfym8a9fxhunWtDaiFbr8ccw9JIsXZRd5CtYp49xp34TEziGyP8VBDShyI0YcF1UIE6YBCv%2Ffpk7u2AN8C3ZIQEttvLGOUgU%2FclXJSgDdDlsttBI4YMUF3f7idiaTJRkDUjxdcXI5QaJjMwOIKDQ8iWgVLaitMsC7ouGb44vVhdsGBz3wXBM%2F22tGM%2F2MNOO3skGOqUBHFeifqhP27rMeN%2BUTA%2FRO2G6dL5djKIXxyQ%2BHPCV7Ixo68vjmeW1aWrgAeaY%2BHRdwkRENcNsk6SDJrotiI3tDXU8bIo%2FussapCTu6DlzFAl1yRRESPBBInx24mn1epdrXHIFT4GsXH6GwiKypK2OWTlyrIrS9fMk0lxpUoqEm0n%2B0BUmBa3hZNUJPDGpx3a06UhFMoso8wEi9eJ%2BydHDO4gM3l0A&X-Amz-Signature=c7099f6d96ef5bd6baf18b5f7f8c405cdd83223a653fb4333fcfaa63dea4ceff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMWBCL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbRXgR%2F%2BsIlPSY60aK9daxFEgES0wkRn%2Bfj%2B%2BocSuhUAIgbGnko3%2BJl%2FRSQjhCNH2dZmrDDwx8B56f8aeIsRMhxQgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHvDqfhkYQEzfsxOyrcAzQfABXMXRGM7o6me2PHWhxvXjgtqedI1HqYE75EZ%2F%2FwJCiMe0K1UsltIiEg09PhlCqO0yloMAxZEX9LZ%2FUObU4olAh4sg7CN9wBOWzx4h%2B3c7oMTgO%2B6gEl%2FWKIdnkfby09WdYG2Javx0FovQbqTHz26HiBEKv0Q8AZpp3Ow09XMLW4YwUpB%2BeOvjERhGTX4PfPJaTD%2B9Kq00lbMKp7YJ97VrHHczgx9bRgTX7OWjj6Ntzf%2FGo%2FgbLW0%2BCo3IG7JAEWv0znk8kvYiXa%2Bd7pSv4YSBJ6yPpVSIeMXWKQywfrLAIKyuEkCTlfehy9LeeNBw8Sa2jf5%2FZ98%2Fr2x8HsOKcOx1fh9mvaw%2Bc07ZigPegK24rsfYP8wQBhFxOyMsmWi419hi9tiN5Mmm%2BtXgbObqsTlsvTTFXd5IZ0dCGK%2FG7raHaJuXqr9ussQTntmiE%2FFfym8a9fxhunWtDaiFbr8ccw9JIsXZRd5CtYp49xp34TEziGyP8VBDShyI0YcF1UIE6YBCv%2Ffpk7u2AN8C3ZIQEttvLGOUgU%2FclXJSgDdDlsttBI4YMUF3f7idiaTJRkDUjxdcXI5QaJjMwOIKDQ8iWgVLaitMsC7ouGb44vVhdsGBz3wXBM%2F22tGM%2F2MNOO3skGOqUBHFeifqhP27rMeN%2BUTA%2FRO2G6dL5djKIXxyQ%2BHPCV7Ixo68vjmeW1aWrgAeaY%2BHRdwkRENcNsk6SDJrotiI3tDXU8bIo%2FussapCTu6DlzFAl1yRRESPBBInx24mn1epdrXHIFT4GsXH6GwiKypK2OWTlyrIrS9fMk0lxpUoqEm0n%2B0BUmBa3hZNUJPDGpx3a06UhFMoso8wEi9eJ%2BydHDO4gM3l0A&X-Amz-Signature=1d1a09eaa3fcaca968939f29da8b7cc4f33aaf78ebb9d5abab60c0f1d3c0c5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

