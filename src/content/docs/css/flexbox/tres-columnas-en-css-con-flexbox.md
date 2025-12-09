---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMXF4IA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2Jb%2FkgcuT%2BG2vrVypUa%2BPY%2BotMM5sbSL4p%2BO%2FIrSwvAiB%2FfI5ufvT5K7oR%2Bv%2Bou%2BiaXpb3aiU7OWshw3ts62msKyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3W6mgpsPEWdF7HuKtwDNsZyrFATpexZQLlbLPitPGkGX9Z7r7x%2BbtIcvLwGNc%2BQxyS8mI53UCGCZEb%2BisiGnDDSYI0h0eAI04%2BxIM26ujm6VaX7jxUN2z2DowKXkSMqPrt3hG7DkLYdNGcLGCiz40b42CRHr4f%2BHOlVi%2FjHRsT4EgwiDqNPgZpkqWPNj%2FR2rc8LPRVaRmyRtWPaof45CQCdZyhnh%2Bj9fQkr7SUNFwwBSHKB3219M2N6mOvKxd%2B%2FFl55mjfbO%2F%2FSIXzRvnJ9cQaY2PCvL31XSfyWl9qm43FdScy0mbdyLUOsEj6q%2F%2FkCaFjsh1aBrEzTK7BaqfowakGwNaT0TZFgH1SGZJWYX0tQsdteNhLa2%2BMV%2FxzR52YbtLnhx2X12Co5cyDMJ5dsdlP4psFXUDgzjnaHoe3qlSoeP7bRXKGHBdyEAJK0t42S1XGMIJDomUXB0s02S3G%2BxadGj1PBlORSqBlAquOIvsJC1Nq8hQcED4L8IBVJpHmBJ%2B4fGeM3uxDN6Nm18KwSaw7cxvVoTs%2FEqGJK9sk%2BtNjVnj7KeqAM7RjIxhpkL0MOLh3AU1EEPwk2QH3v9ATQOuSlCv4LQ%2FmJ3xoGfC4asqNe1IyQnMFbz%2FJFN%2FeN4clx0wTyQwZgRP90MQEwyKTfyQY6pgEoUBXYastGQJCNn0qmS7PdSA1DvxYGAjj9WcVpWNgJPurbfJQkuqCIeSVT6Q5XVDQ9u7C1ABNthy4ohBuEDiXrnifGzbfkAtDi%2BsiV2Xly%2FmxKpmJFzYL0c0bny0Daf%2B1swIcTxkMInaAcU6LeaIY%2B8XfCnhCuNVRAL%2F%2FWCeCmhx3Yl5l06oS0YYxHU4yZAMcL1m3aRWPAUmtm%2FHUG78vd5M3rWdde&X-Amz-Signature=e4c7ed5c27c1f47b5718907286b87bff4d19f777f28424ff8348f8f3bfe1b593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMXF4IA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2Jb%2FkgcuT%2BG2vrVypUa%2BPY%2BotMM5sbSL4p%2BO%2FIrSwvAiB%2FfI5ufvT5K7oR%2Bv%2Bou%2BiaXpb3aiU7OWshw3ts62msKyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3W6mgpsPEWdF7HuKtwDNsZyrFATpexZQLlbLPitPGkGX9Z7r7x%2BbtIcvLwGNc%2BQxyS8mI53UCGCZEb%2BisiGnDDSYI0h0eAI04%2BxIM26ujm6VaX7jxUN2z2DowKXkSMqPrt3hG7DkLYdNGcLGCiz40b42CRHr4f%2BHOlVi%2FjHRsT4EgwiDqNPgZpkqWPNj%2FR2rc8LPRVaRmyRtWPaof45CQCdZyhnh%2Bj9fQkr7SUNFwwBSHKB3219M2N6mOvKxd%2B%2FFl55mjfbO%2F%2FSIXzRvnJ9cQaY2PCvL31XSfyWl9qm43FdScy0mbdyLUOsEj6q%2F%2FkCaFjsh1aBrEzTK7BaqfowakGwNaT0TZFgH1SGZJWYX0tQsdteNhLa2%2BMV%2FxzR52YbtLnhx2X12Co5cyDMJ5dsdlP4psFXUDgzjnaHoe3qlSoeP7bRXKGHBdyEAJK0t42S1XGMIJDomUXB0s02S3G%2BxadGj1PBlORSqBlAquOIvsJC1Nq8hQcED4L8IBVJpHmBJ%2B4fGeM3uxDN6Nm18KwSaw7cxvVoTs%2FEqGJK9sk%2BtNjVnj7KeqAM7RjIxhpkL0MOLh3AU1EEPwk2QH3v9ATQOuSlCv4LQ%2FmJ3xoGfC4asqNe1IyQnMFbz%2FJFN%2FeN4clx0wTyQwZgRP90MQEwyKTfyQY6pgEoUBXYastGQJCNn0qmS7PdSA1DvxYGAjj9WcVpWNgJPurbfJQkuqCIeSVT6Q5XVDQ9u7C1ABNthy4ohBuEDiXrnifGzbfkAtDi%2BsiV2Xly%2FmxKpmJFzYL0c0bny0Daf%2B1swIcTxkMInaAcU6LeaIY%2B8XfCnhCuNVRAL%2F%2FWCeCmhx3Yl5l06oS0YYxHU4yZAMcL1m3aRWPAUmtm%2FHUG78vd5M3rWdde&X-Amz-Signature=7d0ea93f184064b24f8fb82b044c69cc1ded63d059bc5f0535ba447b542e2311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

