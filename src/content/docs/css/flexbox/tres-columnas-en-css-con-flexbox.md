---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGLJVM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzIu%2FXDlT%2BgjcIbwyU9WDO7rmWgYG8POmNcYMo7VeScwIhAI%2FMnBcMz0EHHQLkCK4luFWFbz9n860Dxa8x3EQcOtgcKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp6zJqo1zH9TuI0ZQq3AMoSPS40k%2F77yDuDUnJCELFrRV9%2BCbIOWr5CTxQaUBwVBC7aSgrGx5dGzv6bycZvucIWHwYOyhFHdem7UFVWaraiV10an%2F2autvcExZf3HgERfixQtkZnoSy14xHq5ngR0Pqp%2F00nwkWiGp1FF9PK1UsKYc0%2FVYEu6rQawQZexjx6UlJxHIQ7BQL60jlt0r4G3N%2FB7flTWZTSR44ddaHvxc9eYbgn7TDleNapQ1P0MMcNNAFMmaV%2FHrpr4s7jUeFLSrqk6w4s%2BMYUQ%2BMfgwp%2F67%2B0e2l%2F9GTWy%2BnNQ7zOy8RuA8zpDv3k4Ib7e9uibESB21X%2FvdITc8oET9En2wQxZhO9WJWJTqtN%2BWbUlJaqzwf4zwvKaAgBM9txW7xp%2Fknv9JSMFYYQOtH8hBR9onMP1RRPdilxtg3BMXAkY986mWcNPKbppHvrM2ocavdbvvFqg8dyD0Ff5JZ3Qvzifm5I%2Fm903R1tIOlfrYjoUjl8KkX44jzguKXQhGQ3NgsqJlXpI9mTxmZ%2BJCc0lF7ikFOsC26oGZ03YHfgIUe0%2F6FD4wAQ6DCIGxByPIDde74NwmLIo1QsCTeFugTJNJODjWnsJBnZlokuw%2FyPIefbNMGkfwewthH25lKUz4wkbUCzDbs9zJBjqkAd5rGbNdBJEMCLne%2BaWgk75qbooJpeVjFHJslE759LMzZTnMuOr%2BI00QopmcVlKDFx5CG1H9NJUxq4QzT5GawoasLz2gXvF6ioHd4srA8ty3iPx1KX1ELtrXl9jEdp0P5rmt%2B2ex9TxnXXS113o%2Fem7NaOvDMHYvXP8mTx%2BBqkbcOk5ZeuO%2Fm2r76c0Xl6zioC7VFiir8Doj9O%2FxGTEyYLxJ23pN&X-Amz-Signature=b79342ee184086a74e7b36f29aa3ba9dfcecba771de869c99c5cb46cbe1c7200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGLJVM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzIu%2FXDlT%2BgjcIbwyU9WDO7rmWgYG8POmNcYMo7VeScwIhAI%2FMnBcMz0EHHQLkCK4luFWFbz9n860Dxa8x3EQcOtgcKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp6zJqo1zH9TuI0ZQq3AMoSPS40k%2F77yDuDUnJCELFrRV9%2BCbIOWr5CTxQaUBwVBC7aSgrGx5dGzv6bycZvucIWHwYOyhFHdem7UFVWaraiV10an%2F2autvcExZf3HgERfixQtkZnoSy14xHq5ngR0Pqp%2F00nwkWiGp1FF9PK1UsKYc0%2FVYEu6rQawQZexjx6UlJxHIQ7BQL60jlt0r4G3N%2FB7flTWZTSR44ddaHvxc9eYbgn7TDleNapQ1P0MMcNNAFMmaV%2FHrpr4s7jUeFLSrqk6w4s%2BMYUQ%2BMfgwp%2F67%2B0e2l%2F9GTWy%2BnNQ7zOy8RuA8zpDv3k4Ib7e9uibESB21X%2FvdITc8oET9En2wQxZhO9WJWJTqtN%2BWbUlJaqzwf4zwvKaAgBM9txW7xp%2Fknv9JSMFYYQOtH8hBR9onMP1RRPdilxtg3BMXAkY986mWcNPKbppHvrM2ocavdbvvFqg8dyD0Ff5JZ3Qvzifm5I%2Fm903R1tIOlfrYjoUjl8KkX44jzguKXQhGQ3NgsqJlXpI9mTxmZ%2BJCc0lF7ikFOsC26oGZ03YHfgIUe0%2F6FD4wAQ6DCIGxByPIDde74NwmLIo1QsCTeFugTJNJODjWnsJBnZlokuw%2FyPIefbNMGkfwewthH25lKUz4wkbUCzDbs9zJBjqkAd5rGbNdBJEMCLne%2BaWgk75qbooJpeVjFHJslE759LMzZTnMuOr%2BI00QopmcVlKDFx5CG1H9NJUxq4QzT5GawoasLz2gXvF6ioHd4srA8ty3iPx1KX1ELtrXl9jEdp0P5rmt%2B2ex9TxnXXS113o%2Fem7NaOvDMHYvXP8mTx%2BBqkbcOk5ZeuO%2Fm2r76c0Xl6zioC7VFiir8Doj9O%2FxGTEyYLxJ23pN&X-Amz-Signature=5aa21a728633a480cf537f89da12eb014d1a6efce7a8b2b5e031cef3ce593159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

