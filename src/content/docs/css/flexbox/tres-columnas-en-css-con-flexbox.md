---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCEZN26%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHJ%2FEcsjXCe14JB5cl8GQUisBsO1VXHh6kAoRWQ9Pn9AiEAlK1ODw2gLZmWoh0YihgZZ8%2Fh3yZQFdEHF2vh47qWVqsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjp9%2BhZI7qjvlavPSrcA6oUnFgdLYjHSyp2SoH181x9jcI90VMsL3dqpmNufapquvgvPyExWbXLuDcYle%2FBwKaP73yiC3wPGva8LoA1CfjEGveUgw%2F1FVxKEh1LWwj2%2BSGp32w%2FSIk5KxXO5B6K1d329%2BFRtALIVi9Y%2BPaFbZtlQRnkjyh%2BucMNLBqXuTtRIuCTLkoYzcCJJc4MHqMKKL7fk57yJGs5cAYYMMPv1B8be3m7NE7%2F%2FKsgM1GLMsNSZUWi283%2B5x6Q7FazwT42cPGzy%2FUpVUPNRdfbmHNDklqmywr5mHFbwVbq0O0kyCqYH5ylZ7cjjul4Y7PFuwvTVNHIPVIj7eFpcIgwyo3pZ1LaV126maI5Odj31sfZuZzPz74Brr%2BTQaFHc7g8bIaqVS4dV%2FRhTY8UhY1MSYI8m4C7zzG43XBcLfpW%2BJg7TmOI9lk6OXlF57dbCG1zm7Cogk5ToJECBxMh6twMlSrJgn%2FWc73oYv8RxEM01STcxgEkT7HXCH5Dg3objRRJc0B5LdVNx66hXAsqzNlDF7jPzFqHx93UcAFGJ7Z%2FCBaltVWHS3gvt48x77kwSivNNqotwMGO52XrJvPHIK%2FBuyL%2FIytMrMYEKtccTfMObaSbdWt7QKrq1qSj1v9YhD%2FpMLbD38kGOqUBb1tYt8HzCXwJ7FoTx8q4K4XESrkx5YN0NgfcgN4bANg3B9l9DMbvLN%2FiYX0ugPzDbAkce3z6FNOs0UCxg%2FLwMRjYZ%2FcQDGWh6EZfUI5DTyG5rcMUX%2BPuvD%2FIG8JTW54BaEk8gpoZlI6AhxCEYlp87zV4ipD2NRUd4U1SDHMksMjZDC%2F%2F0hgnHju7MS7v56H63vWKM3iB3w8o00dbp%2B0q6bcXa%2Fq2&X-Amz-Signature=3a11e1dbf2a08e522e4924dbb0dfba7ac430b3e60a973376818e458046442045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCEZN26%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHJ%2FEcsjXCe14JB5cl8GQUisBsO1VXHh6kAoRWQ9Pn9AiEAlK1ODw2gLZmWoh0YihgZZ8%2Fh3yZQFdEHF2vh47qWVqsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjp9%2BhZI7qjvlavPSrcA6oUnFgdLYjHSyp2SoH181x9jcI90VMsL3dqpmNufapquvgvPyExWbXLuDcYle%2FBwKaP73yiC3wPGva8LoA1CfjEGveUgw%2F1FVxKEh1LWwj2%2BSGp32w%2FSIk5KxXO5B6K1d329%2BFRtALIVi9Y%2BPaFbZtlQRnkjyh%2BucMNLBqXuTtRIuCTLkoYzcCJJc4MHqMKKL7fk57yJGs5cAYYMMPv1B8be3m7NE7%2F%2FKsgM1GLMsNSZUWi283%2B5x6Q7FazwT42cPGzy%2FUpVUPNRdfbmHNDklqmywr5mHFbwVbq0O0kyCqYH5ylZ7cjjul4Y7PFuwvTVNHIPVIj7eFpcIgwyo3pZ1LaV126maI5Odj31sfZuZzPz74Brr%2BTQaFHc7g8bIaqVS4dV%2FRhTY8UhY1MSYI8m4C7zzG43XBcLfpW%2BJg7TmOI9lk6OXlF57dbCG1zm7Cogk5ToJECBxMh6twMlSrJgn%2FWc73oYv8RxEM01STcxgEkT7HXCH5Dg3objRRJc0B5LdVNx66hXAsqzNlDF7jPzFqHx93UcAFGJ7Z%2FCBaltVWHS3gvt48x77kwSivNNqotwMGO52XrJvPHIK%2FBuyL%2FIytMrMYEKtccTfMObaSbdWt7QKrq1qSj1v9YhD%2FpMLbD38kGOqUBb1tYt8HzCXwJ7FoTx8q4K4XESrkx5YN0NgfcgN4bANg3B9l9DMbvLN%2FiYX0ugPzDbAkce3z6FNOs0UCxg%2FLwMRjYZ%2FcQDGWh6EZfUI5DTyG5rcMUX%2BPuvD%2FIG8JTW54BaEk8gpoZlI6AhxCEYlp87zV4ipD2NRUd4U1SDHMksMjZDC%2F%2F0hgnHju7MS7v56H63vWKM3iB3w8o00dbp%2B0q6bcXa%2Fq2&X-Amz-Signature=f9422207d505f26fa19109ef319633b74a80e2668e6350cd069b8905437e5386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

