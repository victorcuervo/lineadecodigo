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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIVKI6AG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCntEjh7l408%2BzFpTADSS75ogbnN6LzHhkKaWbSUj60GAIhAMAtCvxfGlzGrMhyABCvblrIa4BmyXtxw%2Fbn%2Bd5BWBwwKv8DCCgQABoMNjM3NDIzMTgzODA1IgywoSBxZ9%2B8DUyyPsgq3AM7UBGYM0W8NfzCsdOlw3DiXyzsFamLgjgSZFVYB%2BEq5oHnLBBHsy3u6VZ4OveYUU4ereSf14va4x%2B%2FyeaVySxHEvIA9CFaAH3uxtQ0lZf8WBIcApJ9C7WXzoEhevR%2FecjTEDAPQyGR9Lolrj57k%2FG1mF9R6ydS7uAGt9QhzzXt%2BHQv2pR6KYIxoolUjtMrugIRoTOoRZdiRqD69WlCT%2FukHNEUQm4nTXtd%2BQqowxtw1utzKeTS58YHv0q4wVOPSike4kKEuBFtN792kjqlMqKavp7%2FyrnOQoy0%2BjYna5CCreRfEGcN5IuoIk2uDumpm%2FIhHGdrCt3t1ezi0hhjMiO7sMLO17y6zXmvmDZRmrm4GGkwxiY0RHYmTcwgSFEsG%2BFHGPru0a30YxR1pYSB6NtJqj1ym5rjqd8COW%2F7hgT9Jr8eaWyD98fo8oQqjPmAdpTjJU%2BI2draFtJFBYq%2F3ZQu6MUotzt6JQh%2BcKUzCv4p7p8U6SaejX7hKVqX3n%2Fc6hr%2F2BxNSx8uOaY9c30%2FiB1Y2q2EevZWihNKogv6fbXs70GUqfq8EfW%2F37SymPtF0Jn0u0%2B6IxmXbqqu%2Fvc2rCznK2nY0ikCKpwV6b4wKg3STeOKNrpZ%2FvpsD6OiADDRub%2FJBjqkAR3SJrgLxyZ8bbeB1lL8%2FOXanzvv2I8LuuSqL%2BX4FaiP8qq%2BSZgI2kJKH3wovV%2F3yzB%2FIBAZMduWBEesyyQibsMW%2BvMEGqPOOJJXvnYvBvY6AwHxMmpBvnsbyyBdRZ5e9R7M72%2FbdSv8CgbkznKvInwOrrnhedwe%2FpBC15RGXkWzD8xwN6rdlnj%2BGoXmNYZcj6rIAv8utsNhJ4TKowBHyuJYyE4U&X-Amz-Signature=1053126039c9211ea4133cb1221fd79549670b3ee25c9f8a00f138e423824b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIVKI6AG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCntEjh7l408%2BzFpTADSS75ogbnN6LzHhkKaWbSUj60GAIhAMAtCvxfGlzGrMhyABCvblrIa4BmyXtxw%2Fbn%2Bd5BWBwwKv8DCCgQABoMNjM3NDIzMTgzODA1IgywoSBxZ9%2B8DUyyPsgq3AM7UBGYM0W8NfzCsdOlw3DiXyzsFamLgjgSZFVYB%2BEq5oHnLBBHsy3u6VZ4OveYUU4ereSf14va4x%2B%2FyeaVySxHEvIA9CFaAH3uxtQ0lZf8WBIcApJ9C7WXzoEhevR%2FecjTEDAPQyGR9Lolrj57k%2FG1mF9R6ydS7uAGt9QhzzXt%2BHQv2pR6KYIxoolUjtMrugIRoTOoRZdiRqD69WlCT%2FukHNEUQm4nTXtd%2BQqowxtw1utzKeTS58YHv0q4wVOPSike4kKEuBFtN792kjqlMqKavp7%2FyrnOQoy0%2BjYna5CCreRfEGcN5IuoIk2uDumpm%2FIhHGdrCt3t1ezi0hhjMiO7sMLO17y6zXmvmDZRmrm4GGkwxiY0RHYmTcwgSFEsG%2BFHGPru0a30YxR1pYSB6NtJqj1ym5rjqd8COW%2F7hgT9Jr8eaWyD98fo8oQqjPmAdpTjJU%2BI2draFtJFBYq%2F3ZQu6MUotzt6JQh%2BcKUzCv4p7p8U6SaejX7hKVqX3n%2Fc6hr%2F2BxNSx8uOaY9c30%2FiB1Y2q2EevZWihNKogv6fbXs70GUqfq8EfW%2F37SymPtF0Jn0u0%2B6IxmXbqqu%2Fvc2rCznK2nY0ikCKpwV6b4wKg3STeOKNrpZ%2FvpsD6OiADDRub%2FJBjqkAR3SJrgLxyZ8bbeB1lL8%2FOXanzvv2I8LuuSqL%2BX4FaiP8qq%2BSZgI2kJKH3wovV%2F3yzB%2FIBAZMduWBEesyyQibsMW%2BvMEGqPOOJJXvnYvBvY6AwHxMmpBvnsbyyBdRZ5e9R7M72%2FbdSv8CgbkznKvInwOrrnhedwe%2FpBC15RGXkWzD8xwN6rdlnj%2BGoXmNYZcj6rIAv8utsNhJ4TKowBHyuJYyE4U&X-Amz-Signature=7e07df81952d5549041da4304cdde018418b608e91e5884b09e1717388856454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

