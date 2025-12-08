---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKW4ZSK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGbnzmzgdfiBn36YxyXojxaEVXh70OmRJIgIB1IA1FaAiEAnG7CvwmL5t78MTZ%2BUR9gljfJHEF539YAa1DRscsyJIYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXGoONl1hQPitxaCCrcA2mKRSCjTWE%2FvCFGGH5qwDhSX1xxoir%2BQLKs%2BI76alD3Qzgl5iHoFPrvUXEki8%2FcmsudEgAVfTJa5EfROkTDu44oOIC%2FqVTNQ5x84orcKEPgbKmQBBAEZvoIm5hm3Y4t8TZe5NLBWmmSXTgk0%2F0n2nnIjw%2FL%2BZZVn3rC0v%2BT0%2B1vtRmSoFfkhaAp%2FQt87kqzhY%2FbfuAJSwKMROs%2F4SH086UMW8v%2B4%2BxXbroNV4pHqs4XHAZTgwTylo2umGHLsAJXVNJNgmhlH1JPiWwKOhG4cYyHtZ1HvMo3hg5d5Uy3s0ntxhq3fzbBrfP8OPxB%2B6xbp1wBJAJBokrY32lI%2FwOq%2BV0eKR7eMa%2BUo1nBLZ4LXhbEUXY56IGVK9UYbnES%2B58phBe2JkTWr%2But9Ao24766WW6wE9EortQT7PL5CJaF2RSi57lOhGDT8WIgar88%2F23FsQrWSIaG65jngdug3iR8LNnLC89A95EcVg8pUUCmBFmCId%2BSgT%2BNvz1R5PmLxzddKD77FvwYfREhGRmODBlr9sMlFURE8eEJ6kdqEJeLRDXoM62TJenEEZDKBsjvHFg%2BYTuCa8XEOW45Od1DOk%2FxIUZIM4%2FAFmSpcQQxXqI7ut2vg%2Bhh0plOObF3%2BhbdMPvs2ckGOqUBzvBg2z7I9nPT0cm%2Bltg7QstltnXNIsJBGGzGsAi7FVN5fICALg2sS7Lgi6y3J40benbSdtVRLSVykM57aVqJrJ4qXJYw8RiAt%2FfP33hyO%2FPZoeVji2t3YFqD4Pa0b4vT3IYS8W0lmm9P%2BXi5yGhU%2Fo7rFmuCf3ztaK8fQM2Cs%2BI65%2BJS4V2u0bBOnaf0%2FFBDsJs5ZAwECYyzdt6apfkru5NgNxWe&X-Amz-Signature=57f3ce3256d4909093f8b2ec7e68bf962593aa75631fb2035de5a5a3ea7ff3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKW4ZSK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGbnzmzgdfiBn36YxyXojxaEVXh70OmRJIgIB1IA1FaAiEAnG7CvwmL5t78MTZ%2BUR9gljfJHEF539YAa1DRscsyJIYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXGoONl1hQPitxaCCrcA2mKRSCjTWE%2FvCFGGH5qwDhSX1xxoir%2BQLKs%2BI76alD3Qzgl5iHoFPrvUXEki8%2FcmsudEgAVfTJa5EfROkTDu44oOIC%2FqVTNQ5x84orcKEPgbKmQBBAEZvoIm5hm3Y4t8TZe5NLBWmmSXTgk0%2F0n2nnIjw%2FL%2BZZVn3rC0v%2BT0%2B1vtRmSoFfkhaAp%2FQt87kqzhY%2FbfuAJSwKMROs%2F4SH086UMW8v%2B4%2BxXbroNV4pHqs4XHAZTgwTylo2umGHLsAJXVNJNgmhlH1JPiWwKOhG4cYyHtZ1HvMo3hg5d5Uy3s0ntxhq3fzbBrfP8OPxB%2B6xbp1wBJAJBokrY32lI%2FwOq%2BV0eKR7eMa%2BUo1nBLZ4LXhbEUXY56IGVK9UYbnES%2B58phBe2JkTWr%2But9Ao24766WW6wE9EortQT7PL5CJaF2RSi57lOhGDT8WIgar88%2F23FsQrWSIaG65jngdug3iR8LNnLC89A95EcVg8pUUCmBFmCId%2BSgT%2BNvz1R5PmLxzddKD77FvwYfREhGRmODBlr9sMlFURE8eEJ6kdqEJeLRDXoM62TJenEEZDKBsjvHFg%2BYTuCa8XEOW45Od1DOk%2FxIUZIM4%2FAFmSpcQQxXqI7ut2vg%2Bhh0plOObF3%2BhbdMPvs2ckGOqUBzvBg2z7I9nPT0cm%2Bltg7QstltnXNIsJBGGzGsAi7FVN5fICALg2sS7Lgi6y3J40benbSdtVRLSVykM57aVqJrJ4qXJYw8RiAt%2FfP33hyO%2FPZoeVji2t3YFqD4Pa0b4vT3IYS8W0lmm9P%2BXi5yGhU%2Fo7rFmuCf3ztaK8fQM2Cs%2BI65%2BJS4V2u0bBOnaf0%2FFBDsJs5ZAwECYyzdt6apfkru5NgNxWe&X-Amz-Signature=f99806f969cb67de9c0c9cecc93fe3d28912afbcbc533644c72d7e5b94b56236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

