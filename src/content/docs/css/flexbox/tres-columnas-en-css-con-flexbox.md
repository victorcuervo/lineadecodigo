---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFL6S4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHDvldtRN1UiARjNgUkIAemIydoVI8RfdE7Tjx9I%2Bd%2BAiBQ2I2pRKgn7ybi9LnCFW4INH0TBpdUzYU6g9sCAzMv2CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLGR64p0XkOLJ3PqDKtwD2KR1%2B%2BXBtNtILKrMNVAvDdh0%2F8P%2FB15vzMb0uvi%2BwMNFPRZeVMSlaiGy7JZTX32MupvIppm0662yxcB4oTQKlMrd4ILNOnpeM2QNtwXeldC0%2B4Ir5%2BFIZEqxn8HIFg6dqm7UPRT7dDqHDjjmm7%2FPibbPaqKCan6B2jski0ivsKuCDXukGFKaMLLSJSJUqUdNVALQ%2BjXktcoflDM5qIlsxt2pfz44Yuf%2BPuoITvaqugK8KEnAAr3Nr5Zl38BF%2B%2FtRgWCPxS9JWaJaF6s52dy%2BoRcIe%2Bs0NRTKsJcmaRcmh9gjm7ZFymq14auwa1WlCb5dR7sgXDLuNch1Oa8Jox8wJKrix2s0T9Zgrmm4ffiUgWkidBawowfjv948EH5dXGSNPiOhgLF9mJ7gD7IezsxFI8GsHa55exKNT1PqKi5YbSUc%2FVWoOQJ1SHOpGtDpKWwGHSFDrgHnjYybWpLBj51XaA2s6vuiafLybewELA9%2F7u8W2ZviI0Yr9NaglFYa%2FBSXG%2FfZM8fahKiI0EZFVqZaCi5Aeke3i5l57VXQm7Pi26dO8kasxx%2Fabf70Bafi%2FXnYBUr4fhQMDcuFYW9HOBh3n74avaH3ddENmzoS2KgDroWzhxayxq8DyJNEJ5owwbPcyQY6pgFY0PQAgH6FwphYm24QFAG2YuOgsWdi%2BIEtGVIKiMCf5YgsArQiBE%2BXEfUdepmYf0z7PSUEQ9vnoEgtAfElSpdOjAsYHcBYn1RzmYQVY4WVONP4l0zRfaaRzgSIwjANbu5ihPsd4uDe%2BoPZ99w0Wqdw%2BKD%2Bmnk6gKDFhG92b83rDDgCUee3IXw5t3injFlRKewcJ9tCoO3nN0xkXf%2F0xVrZ29GUfTzu&X-Amz-Signature=990541655587369bbae38af96b08b6611ed0c3947c532aa71244bfd2b2fc3381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFL6S4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHDvldtRN1UiARjNgUkIAemIydoVI8RfdE7Tjx9I%2Bd%2BAiBQ2I2pRKgn7ybi9LnCFW4INH0TBpdUzYU6g9sCAzMv2CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLGR64p0XkOLJ3PqDKtwD2KR1%2B%2BXBtNtILKrMNVAvDdh0%2F8P%2FB15vzMb0uvi%2BwMNFPRZeVMSlaiGy7JZTX32MupvIppm0662yxcB4oTQKlMrd4ILNOnpeM2QNtwXeldC0%2B4Ir5%2BFIZEqxn8HIFg6dqm7UPRT7dDqHDjjmm7%2FPibbPaqKCan6B2jski0ivsKuCDXukGFKaMLLSJSJUqUdNVALQ%2BjXktcoflDM5qIlsxt2pfz44Yuf%2BPuoITvaqugK8KEnAAr3Nr5Zl38BF%2B%2FtRgWCPxS9JWaJaF6s52dy%2BoRcIe%2Bs0NRTKsJcmaRcmh9gjm7ZFymq14auwa1WlCb5dR7sgXDLuNch1Oa8Jox8wJKrix2s0T9Zgrmm4ffiUgWkidBawowfjv948EH5dXGSNPiOhgLF9mJ7gD7IezsxFI8GsHa55exKNT1PqKi5YbSUc%2FVWoOQJ1SHOpGtDpKWwGHSFDrgHnjYybWpLBj51XaA2s6vuiafLybewELA9%2F7u8W2ZviI0Yr9NaglFYa%2FBSXG%2FfZM8fahKiI0EZFVqZaCi5Aeke3i5l57VXQm7Pi26dO8kasxx%2Fabf70Bafi%2FXnYBUr4fhQMDcuFYW9HOBh3n74avaH3ddENmzoS2KgDroWzhxayxq8DyJNEJ5owwbPcyQY6pgFY0PQAgH6FwphYm24QFAG2YuOgsWdi%2BIEtGVIKiMCf5YgsArQiBE%2BXEfUdepmYf0z7PSUEQ9vnoEgtAfElSpdOjAsYHcBYn1RzmYQVY4WVONP4l0zRfaaRzgSIwjANbu5ihPsd4uDe%2BoPZ99w0Wqdw%2BKD%2Bmnk6gKDFhG92b83rDDgCUee3IXw5t3injFlRKewcJ9tCoO3nN0xkXf%2F0xVrZ29GUfTzu&X-Amz-Signature=6734492c0d764acd250e15e8392f08c7043f073b13e59d7c9f04826128dd87cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

