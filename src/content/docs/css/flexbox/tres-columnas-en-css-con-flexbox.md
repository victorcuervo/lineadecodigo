---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRVVN752%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIED%2FIY9%2FiSIsRN2rg3xHj8QZHWam9WI9DXCgHVElG0igAiEAt5chL%2BiKviqRi6v2p%2FVp5tg9ZeB%2BBbP3n3TXrmAzW%2FEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2SLiUlMMxIzUoFOSrcA7OK2CN3oDZfeM73OOJC8vymSfCffcoMf7tQzjGyihdRUGLSXS3%2FU8jRtb9rJ7B3U7wLWtN%2FXsvMPMpZ20JsDXA%2Btbyi3Nlt1EMDA1G14WTkcVuJhBy4y05JDo8tMyCfGj7MF86XnIM8oS%2Bj%2Bz19dnguByW5v9AN2KfkCkXFY5LNf8d%2Bsq%2BnRCIkQHjvZZEvpsIZQC3dhvnvlvRkvn1QCpXzlEipG%2BFGVP4wRrA5dDBYSSWd%2BTHIIrrLgVHEYQtzSslQvQPXBJpiikiSIFCnX8yoj%2BRUCGxmCcdEEDMi0iYAMcAb47uA3Vw0Xkc1x7k8OvMi6uxWLUXyeFyJCvUnuY4r2CgEqMWMPexWFc2EkRAhriz8SEqTWP3GTUDLlEAG33WCTjQNv%2FLjDdFY9XlTJI63WPhzMFB3lHIheNO%2BjkwjrkgimDHK4y9P2%2BnICB8OL6Q8wsuMWuVRYPcthzJY52IQtnjPHsoReF0QeSqA%2BWBQgYs7B4hrgB4sBd6PI0CxwL8YTJJogn5kltxwKFu9NAvWp%2FNo0KPz%2BHcaX6h63QuuqAFaq16FePRX4A115K4Q3qf7M35DoNm6tbqTAdMd8BP4c75O6CvbVbEK%2BLZlKIU8OgDNHVLVHuvTF9deMJK02ckGOqUB%2F1Xq6Y599K8hsiDDfwOQVthvxZGz1XS4fy6lrdvcGTRfxV4jcruvC21v%2BGFFzFeRv1Gj%2BNAjdx8oun6SGUMZHneOjav0Ot%2BNFEucYt5JOEjEGoLeL1HSOTQcidF3TAC3erci2%2BIJZ%2BA8yDC5KyS34AuT8c35Op4GRGBGxSn7RvFQJxWqJIa%2BStpk0%2FuaQyR3u9SSJQqKJIRcxGj%2FWtojlMh3o%2BB3&X-Amz-Signature=727e5647332e1ab150579f70b77be56e827be431e5bc8403a2a806a768488181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRVVN752%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIED%2FIY9%2FiSIsRN2rg3xHj8QZHWam9WI9DXCgHVElG0igAiEAt5chL%2BiKviqRi6v2p%2FVp5tg9ZeB%2BBbP3n3TXrmAzW%2FEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2SLiUlMMxIzUoFOSrcA7OK2CN3oDZfeM73OOJC8vymSfCffcoMf7tQzjGyihdRUGLSXS3%2FU8jRtb9rJ7B3U7wLWtN%2FXsvMPMpZ20JsDXA%2Btbyi3Nlt1EMDA1G14WTkcVuJhBy4y05JDo8tMyCfGj7MF86XnIM8oS%2Bj%2Bz19dnguByW5v9AN2KfkCkXFY5LNf8d%2Bsq%2BnRCIkQHjvZZEvpsIZQC3dhvnvlvRkvn1QCpXzlEipG%2BFGVP4wRrA5dDBYSSWd%2BTHIIrrLgVHEYQtzSslQvQPXBJpiikiSIFCnX8yoj%2BRUCGxmCcdEEDMi0iYAMcAb47uA3Vw0Xkc1x7k8OvMi6uxWLUXyeFyJCvUnuY4r2CgEqMWMPexWFc2EkRAhriz8SEqTWP3GTUDLlEAG33WCTjQNv%2FLjDdFY9XlTJI63WPhzMFB3lHIheNO%2BjkwjrkgimDHK4y9P2%2BnICB8OL6Q8wsuMWuVRYPcthzJY52IQtnjPHsoReF0QeSqA%2BWBQgYs7B4hrgB4sBd6PI0CxwL8YTJJogn5kltxwKFu9NAvWp%2FNo0KPz%2BHcaX6h63QuuqAFaq16FePRX4A115K4Q3qf7M35DoNm6tbqTAdMd8BP4c75O6CvbVbEK%2BLZlKIU8OgDNHVLVHuvTF9deMJK02ckGOqUB%2F1Xq6Y599K8hsiDDfwOQVthvxZGz1XS4fy6lrdvcGTRfxV4jcruvC21v%2BGFFzFeRv1Gj%2BNAjdx8oun6SGUMZHneOjav0Ot%2BNFEucYt5JOEjEGoLeL1HSOTQcidF3TAC3erci2%2BIJZ%2BA8yDC5KyS34AuT8c35Op4GRGBGxSn7RvFQJxWqJIa%2BStpk0%2FuaQyR3u9SSJQqKJIRcxGj%2FWtojlMh3o%2BB3&X-Amz-Signature=c9d9624d250a09d0e881a10f0c75130920d357002e37f3845ed11bace67dc70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

