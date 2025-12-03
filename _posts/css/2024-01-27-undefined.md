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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466523J35ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC2pQbIQLFIFRSmuV42vYxU%2Fmka%2FuRegRagvST3PbSlbwIhAPKBopkECzIhIup4Y76Zg4NZemAaByoS5SZQ6l8d0ThUKv8DCC0QABoMNjM3NDIzMTgzODA1IgwcECXqvIPLeQ1UADEq3AOF4xsarstPKffemhKAhzTI%2FncZYnkNb2%2B%2F9%2B8iFAuUrTzKCGQDa27SdGKD2U73CX3yYaGaDvnvaLNDncD7XN5%2BKa8sTva7NykInfwFbWO5sg5JzhDGM1JFnQqnUXlwMhAUBs4CRSTRLGog90x6um0so5KV69DcCOZ20bvZMGDmIMMDqRMPWBF7dtNifK3IVw1419AXUuQLCDkawiDK3oZn8pC5lBAkvu%2Fb42CE4k%2FzbgqZ2rTSey3u4m2jhLxp6w6luDDdF0A2pbkZufSpxTOKeWsahhzvNRZYRuadjPuTB%2F0W2LzuAZZa%2F30fqnclJMuaNIh8JDbGrtd%2Bf1205AATQbOsYcE%2FH29w0B0a7sUrf9kaco0r1HCWq11r%2FPTMcO3Ta4L855i61YzYg89lvOIz%2Bf7wm1l7S%2Fne%2BTJ8eI%2FLjdQ3tS5h%2BDHodvmYJhCZ8o4Q3YqdxBz0fDu2mVG9uGvJJT2Ygl2nMX0sAXASEYQ8c6rbFeGJqaB%2FXO8pz7Ukrz6F2UhRWEhsMySkErl%2FR4ucnBhLCAMo03kK4uFTOSMH%2FRest2WE70xlrIa8CNth8Vhzcn2%2FY%2FAgZRjzwo%2FUJzxdA8OSRtc%2Fw6A3LKwyawQD%2ByKd6LvuS9vui9%2F18DDCzMDJBjqkAdsGMDeJt0ywXIUG8nrXMm8sacDu0%2FBsQVuxx3NpMGsf9doFmLRof9bb16D9mv%2FcFDZECngFbCz8kEU5CzPmQ8795twoFoIthzLUJO%2FBqDwyzbtrLdfdQxsB0G2q2TdOCtDQfGo38y5WuME6zgdQDR2R%2BECR8B3ryP82UWL%2FLmR7OfiHQFrDUBy87Vp4JG7r3lq3fXRqGJ69K%2BIxaDk1JwBp%2FdTl&X-Amz-Signature=25737493d8f7848cf1324b812f145a6ca2b25faab2274a77faa27cf71b895614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466523J35ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC2pQbIQLFIFRSmuV42vYxU%2Fmka%2FuRegRagvST3PbSlbwIhAPKBopkECzIhIup4Y76Zg4NZemAaByoS5SZQ6l8d0ThUKv8DCC0QABoMNjM3NDIzMTgzODA1IgwcECXqvIPLeQ1UADEq3AOF4xsarstPKffemhKAhzTI%2FncZYnkNb2%2B%2F9%2B8iFAuUrTzKCGQDa27SdGKD2U73CX3yYaGaDvnvaLNDncD7XN5%2BKa8sTva7NykInfwFbWO5sg5JzhDGM1JFnQqnUXlwMhAUBs4CRSTRLGog90x6um0so5KV69DcCOZ20bvZMGDmIMMDqRMPWBF7dtNifK3IVw1419AXUuQLCDkawiDK3oZn8pC5lBAkvu%2Fb42CE4k%2FzbgqZ2rTSey3u4m2jhLxp6w6luDDdF0A2pbkZufSpxTOKeWsahhzvNRZYRuadjPuTB%2F0W2LzuAZZa%2F30fqnclJMuaNIh8JDbGrtd%2Bf1205AATQbOsYcE%2FH29w0B0a7sUrf9kaco0r1HCWq11r%2FPTMcO3Ta4L855i61YzYg89lvOIz%2Bf7wm1l7S%2Fne%2BTJ8eI%2FLjdQ3tS5h%2BDHodvmYJhCZ8o4Q3YqdxBz0fDu2mVG9uGvJJT2Ygl2nMX0sAXASEYQ8c6rbFeGJqaB%2FXO8pz7Ukrz6F2UhRWEhsMySkErl%2FR4ucnBhLCAMo03kK4uFTOSMH%2FRest2WE70xlrIa8CNth8Vhzcn2%2FY%2FAgZRjzwo%2FUJzxdA8OSRtc%2Fw6A3LKwyawQD%2ByKd6LvuS9vui9%2F18DDCzMDJBjqkAdsGMDeJt0ywXIUG8nrXMm8sacDu0%2FBsQVuxx3NpMGsf9doFmLRof9bb16D9mv%2FcFDZECngFbCz8kEU5CzPmQ8795twoFoIthzLUJO%2FBqDwyzbtrLdfdQxsB0G2q2TdOCtDQfGo38y5WuME6zgdQDR2R%2BECR8B3ryP82UWL%2FLmR7OfiHQFrDUBy87Vp4JG7r3lq3fXRqGJ69K%2BIxaDk1JwBp%2FdTl&X-Amz-Signature=25f298197ab021e4ae3d5867874b7bdddf95ff99fe1105b197133748b042f9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

