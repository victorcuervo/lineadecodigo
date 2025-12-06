---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSW6F66%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmubhzE6Q3XHVrZxW3GqlTgzZ%2FhqcRd0AuHqNMji9vAAIhAPmRi3H%2FjXted3%2BUmj3HmBMaXZHY2%2Faise3HbEAZX77DKv8DCHEQABoMNjM3NDIzMTgzODA1Igzpagcm3zBbeHRlQNgq3AMsINM%2FlduyZZOSO%2BlejdW6vPJ3iBH%2FaYXGXjo4RNvSHIOzXartHcOxqggQ8t6EeJVm6QPC78XhdHrSkPvI1BhQf5sPZ3oLkrGw1Mrp3JXPatDde2IOqxK3YOoIun4wVd%2Bw2p8Aw%2FNoyDnbN6qcG1OVbu3fEbM9hV4jGsOOt1N94em67t0e8FcJqla2oWb87kz1u222Q7WbzGIUJS%2BDJ0iLJ6bMu0TZqzVbCRyfsheHVi2eqBJhzAT1DYWCqaifJOrR48UWhaphMs4Yb5%2Bw%2BoeHUUVlAm%2BoW2f58zyhW7JLCuLd7hLisToVXkNFpCFkBjagiAc%2FWts9ZwOCmtO7TlxFbtx6cF3pFZc30nfywrxsKs1NHFzbhm%2FRRIW7PrVvbxvpHm9Ng6SD3KbMuvvR19PWrlo4zyPWGzHxn3MJCGy0cHTvVVVwUAobqW%2BhOZGg5fngw23V%2F39bhDamFaQtpoqhG%2BUz7d542VzzK%2FETwKLdoiVmcsJe56uhII3xOhgHrxAnW2pu%2BkiTzdOek%2BiZpxxUVnShNjcMw%2FNrJj0sG%2BO9UjX7%2FyjUL3Flt1EWhcJdpfj0g00iScENoIteJZxSBx6N7eBdAQN9AfvXEINW35MzC99P%2BftW4%2FKeyc6bSzCrvM%2FJBjqkATjx3F2zT82S64EsVvdeXtWQ3A45t0L2mea6V4MoKgFUH4P0wTrxXRP9PCDwSMR1IMzH6Z1IGDNKQm%2FkN87joUxdTGYUCckZMoNJWckXJv03O0QmY7wWmUxJoIDUgeZqbtwj750leQdeotIiKzhLLTAF7cRKc8qehnxvE%2FxkV0L9Fdy9QhevDFERfS%2BBsjYB0jta%2FYs%2BOPDaOUmbYcCBHaoNvjOt&X-Amz-Signature=7efe4e49f5faf28bf9d6e92773796d8c6b6ff2bd1fb52d27191e4191dfd8c873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSW6F66%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmubhzE6Q3XHVrZxW3GqlTgzZ%2FhqcRd0AuHqNMji9vAAIhAPmRi3H%2FjXted3%2BUmj3HmBMaXZHY2%2Faise3HbEAZX77DKv8DCHEQABoMNjM3NDIzMTgzODA1Igzpagcm3zBbeHRlQNgq3AMsINM%2FlduyZZOSO%2BlejdW6vPJ3iBH%2FaYXGXjo4RNvSHIOzXartHcOxqggQ8t6EeJVm6QPC78XhdHrSkPvI1BhQf5sPZ3oLkrGw1Mrp3JXPatDde2IOqxK3YOoIun4wVd%2Bw2p8Aw%2FNoyDnbN6qcG1OVbu3fEbM9hV4jGsOOt1N94em67t0e8FcJqla2oWb87kz1u222Q7WbzGIUJS%2BDJ0iLJ6bMu0TZqzVbCRyfsheHVi2eqBJhzAT1DYWCqaifJOrR48UWhaphMs4Yb5%2Bw%2BoeHUUVlAm%2BoW2f58zyhW7JLCuLd7hLisToVXkNFpCFkBjagiAc%2FWts9ZwOCmtO7TlxFbtx6cF3pFZc30nfywrxsKs1NHFzbhm%2FRRIW7PrVvbxvpHm9Ng6SD3KbMuvvR19PWrlo4zyPWGzHxn3MJCGy0cHTvVVVwUAobqW%2BhOZGg5fngw23V%2F39bhDamFaQtpoqhG%2BUz7d542VzzK%2FETwKLdoiVmcsJe56uhII3xOhgHrxAnW2pu%2BkiTzdOek%2BiZpxxUVnShNjcMw%2FNrJj0sG%2BO9UjX7%2FyjUL3Flt1EWhcJdpfj0g00iScENoIteJZxSBx6N7eBdAQN9AfvXEINW35MzC99P%2BftW4%2FKeyc6bSzCrvM%2FJBjqkATjx3F2zT82S64EsVvdeXtWQ3A45t0L2mea6V4MoKgFUH4P0wTrxXRP9PCDwSMR1IMzH6Z1IGDNKQm%2FkN87joUxdTGYUCckZMoNJWckXJv03O0QmY7wWmUxJoIDUgeZqbtwj750leQdeotIiKzhLLTAF7cRKc8qehnxvE%2FxkV0L9Fdy9QhevDFERfS%2BBsjYB0jta%2FYs%2BOPDaOUmbYcCBHaoNvjOt&X-Amz-Signature=e2e0bf4d33a74fc666643b4668b2fd59d9ddf318dd2a46e99c4fa748508142bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

