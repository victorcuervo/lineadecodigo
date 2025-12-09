---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMQFUN3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNO73krVaBneKttWSKYJef%2FKmZbU%2FigIgMhbDGH70%2B0AiAcfcv%2FdvYYXILFxUU84LZ2fOO3eWKNbIygFgNi1ZMWQyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDlcEzKuS6tw6WOPgKtwDBwdahA7iiWlIfgEbhi9i%2Bjffx4bXkSlcuwr92iC6DSxXeAL1rGJ%2FQ0x1oCQvW%2Bi5zKd4tNEtuqtvVxXgKzK7FOY6Srvuyvw%2Bthu75AF2kvKewL1OO5H8AQvOth7WIcqPpFnfQnZmmjsdzwHl3WwWwLQ5UVNt4%2BR63JHQji3ekX69GJdHtqmHImWOSr7wBZvARS99svPDGSQzWixOWHliRIZ3%2BeFpJ%2BYrgCj0ExI%2BnaJ7ZrFfN8Wkr6236VjEf82OzaAzArx6HEzupXd68jbyonGzEF4sHW0hkSJrFh3MXThQJzWv0iAETFPQ0SuWWxkPn%2B%2BFY4fkUs%2FLDzkvcmjajgQJEUeSnt3ZKTLiQ5phWCE%2Bo1ksRtZPG%2Ba%2FNze6q9TYXBXudzBXQ57voOOrev%2FNN%2BZW2uf%2F9E3cSRqh%2FAVUQM8OgCVU1FeBA21k65mkMGy3u%2B%2BCQiutpAA%2BqJkMMmJE%2FSum8v7eYzGNvFc41MU4A7o6Pod8hHdxEWN60iB0kUrOatX0MX%2FNr7086epRJIfSkOumPh0RzKzVpyIHsKukE502kfz%2FALVUgQ0wlNuZdybNkDjkmrj%2F8XIVidNRFRkIaLdSEP6BzAC6N%2BMLsbXKrIDa%2BomOl4Ab8WMRC84wscLdyQY6pgGcN4sFhyFv%2BKu86I8B5Xxzn7CutHd%2BPldqagZg5bRh0r8D1eBaiIdo4r3GPINWJLqXJbjHEymTq7gDsKmNUykaFRPqLRpudkv2FCqRw3HVuSJxtPXHtHQNQ2TqsBDYESmCg%2BSHbxzqbVdcr6UCpPcgd9HPsa6ugsjpPbN5F2XJU0qYm2sYSfbM9MxnBVjSrJ80X7w1ZASHkPUvUFGtCHoTDNZ8P1Fj&X-Amz-Signature=5a29e4790a8bfe524ccba3dc85fa4bef4405a4fe867ba7983789d9c0ca0f4819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMQFUN3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNO73krVaBneKttWSKYJef%2FKmZbU%2FigIgMhbDGH70%2B0AiAcfcv%2FdvYYXILFxUU84LZ2fOO3eWKNbIygFgNi1ZMWQyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDlcEzKuS6tw6WOPgKtwDBwdahA7iiWlIfgEbhi9i%2Bjffx4bXkSlcuwr92iC6DSxXeAL1rGJ%2FQ0x1oCQvW%2Bi5zKd4tNEtuqtvVxXgKzK7FOY6Srvuyvw%2Bthu75AF2kvKewL1OO5H8AQvOth7WIcqPpFnfQnZmmjsdzwHl3WwWwLQ5UVNt4%2BR63JHQji3ekX69GJdHtqmHImWOSr7wBZvARS99svPDGSQzWixOWHliRIZ3%2BeFpJ%2BYrgCj0ExI%2BnaJ7ZrFfN8Wkr6236VjEf82OzaAzArx6HEzupXd68jbyonGzEF4sHW0hkSJrFh3MXThQJzWv0iAETFPQ0SuWWxkPn%2B%2BFY4fkUs%2FLDzkvcmjajgQJEUeSnt3ZKTLiQ5phWCE%2Bo1ksRtZPG%2Ba%2FNze6q9TYXBXudzBXQ57voOOrev%2FNN%2BZW2uf%2F9E3cSRqh%2FAVUQM8OgCVU1FeBA21k65mkMGy3u%2B%2BCQiutpAA%2BqJkMMmJE%2FSum8v7eYzGNvFc41MU4A7o6Pod8hHdxEWN60iB0kUrOatX0MX%2FNr7086epRJIfSkOumPh0RzKzVpyIHsKukE502kfz%2FALVUgQ0wlNuZdybNkDjkmrj%2F8XIVidNRFRkIaLdSEP6BzAC6N%2BMLsbXKrIDa%2BomOl4Ab8WMRC84wscLdyQY6pgGcN4sFhyFv%2BKu86I8B5Xxzn7CutHd%2BPldqagZg5bRh0r8D1eBaiIdo4r3GPINWJLqXJbjHEymTq7gDsKmNUykaFRPqLRpudkv2FCqRw3HVuSJxtPXHtHQNQ2TqsBDYESmCg%2BSHbxzqbVdcr6UCpPcgd9HPsa6ugsjpPbN5F2XJU0qYm2sYSfbM9MxnBVjSrJ80X7w1ZASHkPUvUFGtCHoTDNZ8P1Fj&X-Amz-Signature=5817386ab8ef59307dc8baaed32a1365668126ae5a852edbf131dbf71f30fa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

