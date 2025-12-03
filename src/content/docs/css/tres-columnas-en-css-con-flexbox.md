---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5X3RIUX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICJIMJ1QtmmUdLvqStR5w8lrsbS7k6dxtietu9KfngS0AiAi4TN9pdaSuUH4wqN%2BST0PZuEd569sniiCGNOkUwmuHyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLzM4KUIpfpuBBnxsKtwD9uUSVo1ieVNX8Atwjehoc2bAQLU3O8N4iQ80w%2Fp9lyyZSup8%2BL0JDq6G%2FFOZFzHna1AXsT1SnSBSZ8NLJAPqpxv6o6RQzb9ryBoR2kRl7tQSfxBglqk2dp6LdOYhtzUFNWmdT6I1FTAmwxbKx4ldBiLpld8lUkIK%2BFXBtkBoCr%2BGUEXLjcn6puz1U6W4M1rw4QSj9wFqAB46NwFkL4OWIMT%2Fjd40DTXTEvp0%2FCoe7Af%2FWX4QuN%2BPYD6wdfBmlwvpHs3RUBRW%2BtyX7x%2FNtDsZMH7E6gvKGvksJRapRMRnlCT28bSYeQJKblAIJFNcTiek8xgm2vT8Iq7Xo8UDXEOWi9WW3UXLmWBZVzRq1AHj6QOpg0uaFVN1bWb85PcpYvTmr3ivDBLdt0nSmloNTmJeH4AF2QQ%2FHYL6iBxZApO8ZUSZZORhB6mmtl5fgHOlRRuD1X%2Bst%2Ff007AX2c%2BUpaoahDViqzEuCIBYDeC0geE9hVqM4gXUyUK3W0kJTbfTJAm7AJ6uejIFKcKPdyRJj68I5yk6DCTQ6oDjXd%2ByY43XU%2FU5y8A4e53JmHrKUImk9RaI7I6pkLhaWVqShR9tsruJuFNAUjj2x41606IT7YAbINYKfrzbptJTOCgLS2Ewkt3CyQY6pgHvMg%2BCxkrNiC4EMrvSbLRGWc6Kyn7a0jcaKhiuNuJ7k0YJA5QSbUsIqx5AOhmOsQdRIAXAIHOnGTh92lf0sEUqfLUerxQ1IqG0f9XsQJiQzCNlUQhTupekPs9gNxqQUH%2FbTpYZzy1dblOMSnYmDGWkODH32yHUlbpXeMXg9Idp7dF1TJLjNmFBWZEeS1WQMMNA0J5ysGQxzcokmS%2BXbI972pKWqtjb&X-Amz-Signature=14a2cb8e666cd6777761cda15dd2d0efba3509a271328b2f71df2c822b3de77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5X3RIUX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICJIMJ1QtmmUdLvqStR5w8lrsbS7k6dxtietu9KfngS0AiAi4TN9pdaSuUH4wqN%2BST0PZuEd569sniiCGNOkUwmuHyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLzM4KUIpfpuBBnxsKtwD9uUSVo1ieVNX8Atwjehoc2bAQLU3O8N4iQ80w%2Fp9lyyZSup8%2BL0JDq6G%2FFOZFzHna1AXsT1SnSBSZ8NLJAPqpxv6o6RQzb9ryBoR2kRl7tQSfxBglqk2dp6LdOYhtzUFNWmdT6I1FTAmwxbKx4ldBiLpld8lUkIK%2BFXBtkBoCr%2BGUEXLjcn6puz1U6W4M1rw4QSj9wFqAB46NwFkL4OWIMT%2Fjd40DTXTEvp0%2FCoe7Af%2FWX4QuN%2BPYD6wdfBmlwvpHs3RUBRW%2BtyX7x%2FNtDsZMH7E6gvKGvksJRapRMRnlCT28bSYeQJKblAIJFNcTiek8xgm2vT8Iq7Xo8UDXEOWi9WW3UXLmWBZVzRq1AHj6QOpg0uaFVN1bWb85PcpYvTmr3ivDBLdt0nSmloNTmJeH4AF2QQ%2FHYL6iBxZApO8ZUSZZORhB6mmtl5fgHOlRRuD1X%2Bst%2Ff007AX2c%2BUpaoahDViqzEuCIBYDeC0geE9hVqM4gXUyUK3W0kJTbfTJAm7AJ6uejIFKcKPdyRJj68I5yk6DCTQ6oDjXd%2ByY43XU%2FU5y8A4e53JmHrKUImk9RaI7I6pkLhaWVqShR9tsruJuFNAUjj2x41606IT7YAbINYKfrzbptJTOCgLS2Ewkt3CyQY6pgHvMg%2BCxkrNiC4EMrvSbLRGWc6Kyn7a0jcaKhiuNuJ7k0YJA5QSbUsIqx5AOhmOsQdRIAXAIHOnGTh92lf0sEUqfLUerxQ1IqG0f9XsQJiQzCNlUQhTupekPs9gNxqQUH%2FbTpYZzy1dblOMSnYmDGWkODH32yHUlbpXeMXg9Idp7dF1TJLjNmFBWZEeS1WQMMNA0J5ysGQxzcokmS%2BXbI972pKWqtjb&X-Amz-Signature=75602c23f0e4b31590e3b2a7c8e3a79715bf698a485ffd7efab37136cff34b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

