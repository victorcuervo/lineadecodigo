---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C72ARHA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGynf%2FmDL5uef6BFCFb4aB%2BxqV6l4yZH2Eh9eamxazUZAiAMXRI3lMOU5pFnZMu8mLfEJBicPx9v5hrd1qOLmHLvziqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEC6p4m3TlzDY%2FzyKtwDd2GG1S9quWxSWKy5eJ5EFTEpUFW8Ndv%2BfNiJrEAvWMNhzbrXAl8QYPnQHvafm2aAJ0AGtE3MY5fOzPsO%2ByrJUwmhyzj8cl5Y%2BE0ETUSbsnX5RmZoEC4mUEfvoZKprsYDQt0bNnzDypHyk%2BhiDngxwQQ5%2FmAGL1zPY%2F8TFY7XHxQ5VTZFX1UHW211ICfj7SAvCBGPWiLFUMpKEBgONQLPRVN3goZ1gWJu1%2B%2BzCgEoVadpjbB5razZKznZFJ%2FcGZHL6e6cvhd2T1GBmzA9Vv3pv8FcJC8PXkq13sXLHdI%2FAghihZ5Ls7NPOXGh07M6TnEJCHZly7UNIcAvsaUm%2BV%2BIebwp3x7TOpIXm4MErbs2blQrag1l3piJMKlW3pSrLvZsg%2FRmFNdtduzcAqLeot9wvlBS4UPJa9NUyL8Z6fwo2M%2B2z1DOUYNVseIx6OnTZPqLhXzxgsJ%2BrnxCmkkmNgmRZCmvuENCEdE1KUJf264V9XQIkN8NVHHhRdhke3T%2B12QTLT2OpZbQQwmvPAlfwSUuv0ASZhqot2bHyt68cQY0ub1iTwHn%2Bk8EKJ2CsTmetwhuz0H28yjc91mr%2Fa5H1maTlgkSDNPqL%2BfhjMPTdTL3vdtzSic3dN%2Fgk1WrNJkwvKXfyQY6pgEWZIDzQxg9BlcvZegBJv1%2FxIhDrdOKsz7vBukpCK0KPEluO%2B%2F4X6E9EINo0vbEMSGO6xPE3sB7piZALIQglKLtcmexWmZ6M%2BKGRFXuPGywAf3pWvjqWralyowpkyNY52XzIVqJrAqbHkPDxflRsMMhn1eDMyF1w7RlhArblM9Q%2FHhe3GapxR4eS5yiZr56cLIJgnjjjos25C%2BO2iH%2F2zB2pnurb6bt&X-Amz-Signature=c9a4afd6f7c6cd8fabd9f66f5837dc2a8e92b2280fff31e78783e8108f2d20a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C72ARHA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGynf%2FmDL5uef6BFCFb4aB%2BxqV6l4yZH2Eh9eamxazUZAiAMXRI3lMOU5pFnZMu8mLfEJBicPx9v5hrd1qOLmHLvziqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEC6p4m3TlzDY%2FzyKtwDd2GG1S9quWxSWKy5eJ5EFTEpUFW8Ndv%2BfNiJrEAvWMNhzbrXAl8QYPnQHvafm2aAJ0AGtE3MY5fOzPsO%2ByrJUwmhyzj8cl5Y%2BE0ETUSbsnX5RmZoEC4mUEfvoZKprsYDQt0bNnzDypHyk%2BhiDngxwQQ5%2FmAGL1zPY%2F8TFY7XHxQ5VTZFX1UHW211ICfj7SAvCBGPWiLFUMpKEBgONQLPRVN3goZ1gWJu1%2B%2BzCgEoVadpjbB5razZKznZFJ%2FcGZHL6e6cvhd2T1GBmzA9Vv3pv8FcJC8PXkq13sXLHdI%2FAghihZ5Ls7NPOXGh07M6TnEJCHZly7UNIcAvsaUm%2BV%2BIebwp3x7TOpIXm4MErbs2blQrag1l3piJMKlW3pSrLvZsg%2FRmFNdtduzcAqLeot9wvlBS4UPJa9NUyL8Z6fwo2M%2B2z1DOUYNVseIx6OnTZPqLhXzxgsJ%2BrnxCmkkmNgmRZCmvuENCEdE1KUJf264V9XQIkN8NVHHhRdhke3T%2B12QTLT2OpZbQQwmvPAlfwSUuv0ASZhqot2bHyt68cQY0ub1iTwHn%2Bk8EKJ2CsTmetwhuz0H28yjc91mr%2Fa5H1maTlgkSDNPqL%2BfhjMPTdTL3vdtzSic3dN%2Fgk1WrNJkwvKXfyQY6pgEWZIDzQxg9BlcvZegBJv1%2FxIhDrdOKsz7vBukpCK0KPEluO%2B%2F4X6E9EINo0vbEMSGO6xPE3sB7piZALIQglKLtcmexWmZ6M%2BKGRFXuPGywAf3pWvjqWralyowpkyNY52XzIVqJrAqbHkPDxflRsMMhn1eDMyF1w7RlhArblM9Q%2FHhe3GapxR4eS5yiZr56cLIJgnjjjos25C%2BO2iH%2F2zB2pnurb6bt&X-Amz-Signature=af957aba7d7222f03b3bf5a2914d439f954d1ace8b73999024e0805892c37e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

