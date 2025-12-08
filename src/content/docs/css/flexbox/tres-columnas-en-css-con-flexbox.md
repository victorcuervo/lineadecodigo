---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZD5C3W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2F49ZdFMMAI786cwLPTTCnUl1OaHg7D939LTNHq0XdAiEAgRcMkkehFA9oHTczLP9Lz9HhmTu6OLy1BF5JixASDv8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISdnlMdWCKHX23N2SrcA%2Fmi17yS9QOzcKlotnPydh6v%2BrZM3SZallfRxE29yAnlnszMqlDdTfXpG%2BpD2SQ0LxsEY37usP%2BvSu9WCOU7hixcQQaIsUPfMPzCHayuhWOJ0%2BOhBsBCan1rkblftlAOiBqzdKof6yRSMiM1aEHQwRhbveISG2pz8PvuyDQ7ppiKTP4goIpihTu%2BFp8VKY%2BP%2BnLyHcdUIP%2B45M3ZTa727TK6USVtrz7F0Wm1caWdoMMEcxpqVxEve7kCDuBazVj5Zw6YWZfXC6aWB3BNbfQ1ui3cfFWs9Z%2BMs9lWL4bL6rskCnXet2iDMlnThwN%2BjJTweAH18U4XQrBemQ%2FJ1W%2FlzCkJ%2FV9ilkuxeyBQlNP97Hykg65mY2%2BkeaW6Gz1qkEDZm5JQbX5h74vh%2BqBjFm%2F84srcK1VLytt49TwDab643Fsru5NfJw32VSteXrTJ6lWH287%2F9yg62g99bjEkyLPs5LUSV3bB3ydWqptiQgNnh4ZPFnqZV%2FJJSgaXFey5KtvB9Jpvb%2FZNTiM7X7OvXRdUjeDU8G0Mh%2B1I9lbmJGt21sUQImk6hb5q1brnM8KbZF5VNnxf19ipG1uqL3FAIeUD96s6fn7oqB60bGqD72SkI4FxhBPkMfyV9A9Oj8KGMI3v2MkGOqUBEANgp3MRaFJqMUNdeu8v%2FYU6KTs20e81OWIPpefOVxy9jaHzK3u75B0RQGY0iAHqis7mX1aElm4ihQv22VV58cQhUii6%2FJ%2FkTOEYqHoqNJm9%2BK8PavcWQ81WHT46lDorgg2xRTdgLDj7qixrYhPNhm7oHfwP0rotms7mJ0BVmYingRNqQnA3fvs8c8o42QSTyY15dCvVCmvB7OMjmuElNk0ksGdz&X-Amz-Signature=d31803767c5f1794fc995759acf87f90dea26ff87951b121de7d8983c93b3941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZD5C3W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2F49ZdFMMAI786cwLPTTCnUl1OaHg7D939LTNHq0XdAiEAgRcMkkehFA9oHTczLP9Lz9HhmTu6OLy1BF5JixASDv8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISdnlMdWCKHX23N2SrcA%2Fmi17yS9QOzcKlotnPydh6v%2BrZM3SZallfRxE29yAnlnszMqlDdTfXpG%2BpD2SQ0LxsEY37usP%2BvSu9WCOU7hixcQQaIsUPfMPzCHayuhWOJ0%2BOhBsBCan1rkblftlAOiBqzdKof6yRSMiM1aEHQwRhbveISG2pz8PvuyDQ7ppiKTP4goIpihTu%2BFp8VKY%2BP%2BnLyHcdUIP%2B45M3ZTa727TK6USVtrz7F0Wm1caWdoMMEcxpqVxEve7kCDuBazVj5Zw6YWZfXC6aWB3BNbfQ1ui3cfFWs9Z%2BMs9lWL4bL6rskCnXet2iDMlnThwN%2BjJTweAH18U4XQrBemQ%2FJ1W%2FlzCkJ%2FV9ilkuxeyBQlNP97Hykg65mY2%2BkeaW6Gz1qkEDZm5JQbX5h74vh%2BqBjFm%2F84srcK1VLytt49TwDab643Fsru5NfJw32VSteXrTJ6lWH287%2F9yg62g99bjEkyLPs5LUSV3bB3ydWqptiQgNnh4ZPFnqZV%2FJJSgaXFey5KtvB9Jpvb%2FZNTiM7X7OvXRdUjeDU8G0Mh%2B1I9lbmJGt21sUQImk6hb5q1brnM8KbZF5VNnxf19ipG1uqL3FAIeUD96s6fn7oqB60bGqD72SkI4FxhBPkMfyV9A9Oj8KGMI3v2MkGOqUBEANgp3MRaFJqMUNdeu8v%2FYU6KTs20e81OWIPpefOVxy9jaHzK3u75B0RQGY0iAHqis7mX1aElm4ihQv22VV58cQhUii6%2FJ%2FkTOEYqHoqNJm9%2BK8PavcWQ81WHT46lDorgg2xRTdgLDj7qixrYhPNhm7oHfwP0rotms7mJ0BVmYingRNqQnA3fvs8c8o42QSTyY15dCvVCmvB7OMjmuElNk0ksGdz&X-Amz-Signature=f925b5fb2e591e90bbe1b8d1dbcec65bdd68756756321f7c8b272f4cc8c3ae63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

