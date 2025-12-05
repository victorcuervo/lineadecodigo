---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDOBUKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3uLDS6MGktM69EnQbXBIgTCCpNaOsgpH7Hh2TyPp08AiEA9Q3SeBlDbUqsXJbM5uLDQkx5g08lb%2Bp%2BSIHTwfg21WIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMVOXB62BduwpQ3tWCrcA2s0CHlfOLuvPf96D%2BIzK46wjDQ7zicvqEuGG8SX8UkO3KKbb9zc4qPh8O3BT5YMARcxNi7TRVEJzNDkvQGcoz2bByM7kJYHhfCpY95JujpYtkllWQ48G0y4eQr7mKb5xqLpFph8pU3Mulpv2h%2FltsJiwy26fJ52KbrC1oV9avn3HKG%2BCfm9f96v0yuQ1T0haDBpoKFQaThK7mpOBo%2FreXf8NX90wImE%2FpqHKgFM7JWX64WFjp67EeEHvGY%2FmTX8cQt7o3qNjlp6%2BkOvSdZXQYwXEElYTBLyPeaXXxiDcfMHHUL0qMGHomJBrb5POqucYldY%2Bpn5xrOaM6M25OX6vBdhzLoLnePwFA2FeNpZRe0LN%2FSzb8Xt0bwSdKUt6ka3K5FqL%2Fq8ZHk8BLBx%2BCml4SOa3vsh3jWhqTWwP6gs8%2Bdz5%2Fp6LIwJj1eNibvRxG0NmxYHYQ%2FNPXRDAZTbkNa2CqhSZGfAcxbiwZSz2PrUN%2FJlcidJEz3erapRFfGmnWcr0sok7RArhwd%2BG0umoFYYkwXVvKTpWE5P7tFzdEWyTU2%2BqXjkuTLflOPFz%2B%2Beia%2BnnxovfSBCGGqaFQWlhoFg%2FezfogypmkKFBuc6dK5cKe9IlZrtKYd427C6IX%2BKMNawyckGOqUBSs9noxnretVz7hyWZYOghlEwtoxsr62Oc5ESpua8UVdL45PsXl5Gy5P%2FtadNdLJxk%2BNKAA4t6GXINK3CSXIxxLfZcvgWvGZKlLhRi0954f%2FHyfUvFIbpy6fRNxRYbzcynQ8Khha%2BczqpE%2B8ehGAFmT3rnfC4DEaBdtwaBRDxHeP1sG3x4ZYVBd%2B7cWXbmv9vunAPKxKUeF9gj3m8e6HeX0sSNUmF&X-Amz-Signature=886f8e45d352c55111df2ded433215f168cf068572a794d32bd267a794776a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDOBUKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3uLDS6MGktM69EnQbXBIgTCCpNaOsgpH7Hh2TyPp08AiEA9Q3SeBlDbUqsXJbM5uLDQkx5g08lb%2Bp%2BSIHTwfg21WIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMVOXB62BduwpQ3tWCrcA2s0CHlfOLuvPf96D%2BIzK46wjDQ7zicvqEuGG8SX8UkO3KKbb9zc4qPh8O3BT5YMARcxNi7TRVEJzNDkvQGcoz2bByM7kJYHhfCpY95JujpYtkllWQ48G0y4eQr7mKb5xqLpFph8pU3Mulpv2h%2FltsJiwy26fJ52KbrC1oV9avn3HKG%2BCfm9f96v0yuQ1T0haDBpoKFQaThK7mpOBo%2FreXf8NX90wImE%2FpqHKgFM7JWX64WFjp67EeEHvGY%2FmTX8cQt7o3qNjlp6%2BkOvSdZXQYwXEElYTBLyPeaXXxiDcfMHHUL0qMGHomJBrb5POqucYldY%2Bpn5xrOaM6M25OX6vBdhzLoLnePwFA2FeNpZRe0LN%2FSzb8Xt0bwSdKUt6ka3K5FqL%2Fq8ZHk8BLBx%2BCml4SOa3vsh3jWhqTWwP6gs8%2Bdz5%2Fp6LIwJj1eNibvRxG0NmxYHYQ%2FNPXRDAZTbkNa2CqhSZGfAcxbiwZSz2PrUN%2FJlcidJEz3erapRFfGmnWcr0sok7RArhwd%2BG0umoFYYkwXVvKTpWE5P7tFzdEWyTU2%2BqXjkuTLflOPFz%2B%2Beia%2BnnxovfSBCGGqaFQWlhoFg%2FezfogypmkKFBuc6dK5cKe9IlZrtKYd427C6IX%2BKMNawyckGOqUBSs9noxnretVz7hyWZYOghlEwtoxsr62Oc5ESpua8UVdL45PsXl5Gy5P%2FtadNdLJxk%2BNKAA4t6GXINK3CSXIxxLfZcvgWvGZKlLhRi0954f%2FHyfUvFIbpy6fRNxRYbzcynQ8Khha%2BczqpE%2B8ehGAFmT3rnfC4DEaBdtwaBRDxHeP1sG3x4ZYVBd%2B7cWXbmv9vunAPKxKUeF9gj3m8e6HeX0sSNUmF&X-Amz-Signature=bc8cd20da021b322f244540d50fc1ebab82fe8c8ac86422e071d09712492c5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

