---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAOTHOS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHrDLUfQEc%2BCtYTjReJpl0s7rF9yyk51ir7NRcHMnlH%2FAiEA%2Bycm5cX5hz4fJgbGYvsk8qDtpKFjnxQnyX8%2B1e04bJYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJcDuSLYfnmnF9JnNircA%2BgpHOI0T%2F9f7RJvGTHkKEL2SP48LYTgCzqqRnxoTfrc5U%2BHJMB0yipFOflPiyGrvGct9eDM%2BJ9iWfrIargTyGgFvRbng2dCBHXsDoyWBl36DIN8VN8eqmq6dtBsa0esC6JBQG0QUePWKlWuMcexBurA%2FLGXOORQllIiteq1qUcyRFeKMVNZWKTzo0TMraWzg1xIJmuLMOLrPm8NMv9nQOWGD24a0kEIfvpxgukGU5cWGg8iRMvVKCS2QfI5Y04s4lB55EuqaRkSb3jTRv5Sfwkrh4i11Kf0AUzOaxN0feS8ZYaWKL7Ul8rNOauZsVoEJ1za%2FO3s%2FxUYyGZtwXioRKkOkDLlvXq6ddBEar%2BwoFbdBUejq6KvcSHgWdluOq1uPYwtfBxx%2F5eFq0N%2BhiyoW7PDR56QOv30QbHmVsyGmnggCFw%2BReXBz8wLF%2FG6nKNBZOSTVvvVi5Sf%2FdS7BlQxIigHsFuostehhyglcAL64hrSoJWE2SBqKNVh22sDPj5Nk1Fs2L97YFTLDwsUI%2BbdXFkPCdzGMWBkKWKOflvzlY10X444S%2BmFwUPH6UacFqV361Tytjhk9i%2BaL%2Fzf3O8tS%2BDaPtvbjV5tG%2BxshnkPPixR6TWCt8tOPwaqUInuMMmGxckGOqUB4V%2FvRqsvkxGaXqVa6lBHR4rqlUngvaDTjJWI%2FhEGGFh74CuqvPttpJyPXy230yw3yg1zm7PPZ8MJ6iYn1OoJxGIYfqCH9Ev1wZddFDP0dISgzhiCTz0Dfpcq%2Fgs8HDAY%2FyrnglJgQCts4uLmQCQiedvdW0XTb3YzVN6wkH486KXqB8RKUwrzviP0uzy8f4V5D4jrYFpvhk7VOGpJYTu9%2FFDvzesx&X-Amz-Signature=1217b6e481fa5a13d46a88054756ceacd1d4de0aa68b8f6072e2c8c65f22eb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAOTHOS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHrDLUfQEc%2BCtYTjReJpl0s7rF9yyk51ir7NRcHMnlH%2FAiEA%2Bycm5cX5hz4fJgbGYvsk8qDtpKFjnxQnyX8%2B1e04bJYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJcDuSLYfnmnF9JnNircA%2BgpHOI0T%2F9f7RJvGTHkKEL2SP48LYTgCzqqRnxoTfrc5U%2BHJMB0yipFOflPiyGrvGct9eDM%2BJ9iWfrIargTyGgFvRbng2dCBHXsDoyWBl36DIN8VN8eqmq6dtBsa0esC6JBQG0QUePWKlWuMcexBurA%2FLGXOORQllIiteq1qUcyRFeKMVNZWKTzo0TMraWzg1xIJmuLMOLrPm8NMv9nQOWGD24a0kEIfvpxgukGU5cWGg8iRMvVKCS2QfI5Y04s4lB55EuqaRkSb3jTRv5Sfwkrh4i11Kf0AUzOaxN0feS8ZYaWKL7Ul8rNOauZsVoEJ1za%2FO3s%2FxUYyGZtwXioRKkOkDLlvXq6ddBEar%2BwoFbdBUejq6KvcSHgWdluOq1uPYwtfBxx%2F5eFq0N%2BhiyoW7PDR56QOv30QbHmVsyGmnggCFw%2BReXBz8wLF%2FG6nKNBZOSTVvvVi5Sf%2FdS7BlQxIigHsFuostehhyglcAL64hrSoJWE2SBqKNVh22sDPj5Nk1Fs2L97YFTLDwsUI%2BbdXFkPCdzGMWBkKWKOflvzlY10X444S%2BmFwUPH6UacFqV361Tytjhk9i%2BaL%2Fzf3O8tS%2BDaPtvbjV5tG%2BxshnkPPixR6TWCt8tOPwaqUInuMMmGxckGOqUB4V%2FvRqsvkxGaXqVa6lBHR4rqlUngvaDTjJWI%2FhEGGFh74CuqvPttpJyPXy230yw3yg1zm7PPZ8MJ6iYn1OoJxGIYfqCH9Ev1wZddFDP0dISgzhiCTz0Dfpcq%2Fgs8HDAY%2FyrnglJgQCts4uLmQCQiedvdW0XTb3YzVN6wkH486KXqB8RKUwrzviP0uzy8f4V5D4jrYFpvhk7VOGpJYTu9%2FFDvzesx&X-Amz-Signature=f2493b79ed7016bfc1183110a08922e25de4cd5c0ac4e32841bb170c2049858a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

