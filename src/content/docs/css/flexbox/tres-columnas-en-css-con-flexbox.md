---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOCKR47%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLdKY85BCHZuxYf1i%2BHvbSB%2BVuowdy5Kr4%2BCii%2B9%2FqvAiArjRmjDSVT70AVCtx5%2Fv3pIoKUuIGb9pMs%2BlOcURdNSiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8RR%2FEUk9%2B2vkTJ5KtwDUXWF6nBeA8BaCIBi5cNsV%2Fy8wnKyjpUHBO%2BD1IL9gmhvSrlDPrwf%2F1U0%2BG%2BaG43p9uMTGQ49noEU%2BBopdxLn8ZL%2BfsxRE1WdNGFW%2B2nbEvB5V%2BkGaRXg8RLG3qjSTRnPrpbRBjsR7TXNIRCAF3yDXFings0Jevkj5eMMx%2Bvu8LVaiX2cuHF9%2FoRDzlycjekT7sa7U5qvByN1xb2VnuGj3GIGeOtB2VmZ13jaDf%2BWYix4dMgBkJj%2FaOZ7oRJiBzFZahKi%2Fj9lPqwAzd67GxeY0ItBTcrGm5LBk15ZKpsTRRJCQ5pJhpRzA52OKjof8SrQaW24Mg87FDSaGNt73xrXsa%2Fku%2B%2BXSdCyVCvkKC2Uh0OOfgObagPb%2ByXx6iQCMXiBO%2FdGhu9KQoIkyHGp%2FIg%2BHZaubg8mnWxMFAX8C%2BAIfvLajVd9hVIz1q3ZJc6m73a28tFvYhyec7ctbzyJQ8df%2FPJX1mm4Aj0HbWwS3IBAtyCkPKLpICbx6iN0mvrZu%2B29ZgGye%2Bf0FxE%2Fr9OHlVDUOEcs9uBdhq9unjmRj7qIGFqhQ6iIsQrC2mZA%2FPI6T5Xnawp10fkTzsUS4XKnVwB3BiYireEyhygXMXEw%2BKyQrc9%2FFNS78WtP8x6K1OwwxJnUyQY6pgESS9BijhyqfPKxkMxRUnnxyR7B4hso1Zi0QvmcexrLVNvD2hppZeaKy9s10ja5rwtlzDFdGitt5uTUPteNfxgh1f1puMT3xc2aMk8s%2FqkHErYa690UUdGuLUnvmYnY3oVJJbbkrmaioO%2F8zVGbwuyfp7v2ZwNYYInFJY7ZNw%2FTsecpZ4tGNLw1G9%2BNUNDFkcEDfh2bVspvDrGxYtT3LJQai0Tc3%2FKN&X-Amz-Signature=a826796ca584ac75c4a7ba64fe2c40477f103baf3a2da886688867e0019a4408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOCKR47%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLdKY85BCHZuxYf1i%2BHvbSB%2BVuowdy5Kr4%2BCii%2B9%2FqvAiArjRmjDSVT70AVCtx5%2Fv3pIoKUuIGb9pMs%2BlOcURdNSiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8RR%2FEUk9%2B2vkTJ5KtwDUXWF6nBeA8BaCIBi5cNsV%2Fy8wnKyjpUHBO%2BD1IL9gmhvSrlDPrwf%2F1U0%2BG%2BaG43p9uMTGQ49noEU%2BBopdxLn8ZL%2BfsxRE1WdNGFW%2B2nbEvB5V%2BkGaRXg8RLG3qjSTRnPrpbRBjsR7TXNIRCAF3yDXFings0Jevkj5eMMx%2Bvu8LVaiX2cuHF9%2FoRDzlycjekT7sa7U5qvByN1xb2VnuGj3GIGeOtB2VmZ13jaDf%2BWYix4dMgBkJj%2FaOZ7oRJiBzFZahKi%2Fj9lPqwAzd67GxeY0ItBTcrGm5LBk15ZKpsTRRJCQ5pJhpRzA52OKjof8SrQaW24Mg87FDSaGNt73xrXsa%2Fku%2B%2BXSdCyVCvkKC2Uh0OOfgObagPb%2ByXx6iQCMXiBO%2FdGhu9KQoIkyHGp%2FIg%2BHZaubg8mnWxMFAX8C%2BAIfvLajVd9hVIz1q3ZJc6m73a28tFvYhyec7ctbzyJQ8df%2FPJX1mm4Aj0HbWwS3IBAtyCkPKLpICbx6iN0mvrZu%2B29ZgGye%2Bf0FxE%2Fr9OHlVDUOEcs9uBdhq9unjmRj7qIGFqhQ6iIsQrC2mZA%2FPI6T5Xnawp10fkTzsUS4XKnVwB3BiYireEyhygXMXEw%2BKyQrc9%2FFNS78WtP8x6K1OwwxJnUyQY6pgESS9BijhyqfPKxkMxRUnnxyR7B4hso1Zi0QvmcexrLVNvD2hppZeaKy9s10ja5rwtlzDFdGitt5uTUPteNfxgh1f1puMT3xc2aMk8s%2FqkHErYa690UUdGuLUnvmYnY3oVJJbbkrmaioO%2F8zVGbwuyfp7v2ZwNYYInFJY7ZNw%2FTsecpZ4tGNLw1G9%2BNUNDFkcEDfh2bVspvDrGxYtT3LJQai0Tc3%2FKN&X-Amz-Signature=7bf4a8cf6e95bd81f1ca6ee00a341754ce67a5c0e120810eed4113f8a4ea6324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

