---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIQHN2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5PszAo1%2Br9DGYndWEag%2BuB3Smn8lK%2Fz0afI24tnp0yQIhAKQYsfPmwcmb9QlzfYsaJ5zF2JdC5XrximpynQ%2Fp96meKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1K2kS51841qoa1nwq3ANpO1zb3xNNNasaTnZ8v4WZvdtgUOt8uGW7ASj5LpbCX8IWMnNh1g7s6mSJqBX9unG%2Fhm8nr3Kq%2F2DS9uJt1FhFwpjEZn3gvKBM14GmPxpWIOA7PO4ICqbz3tKS%2FaMu57vmjSBIvuZr8%2Bj6N0TVJ5ukg857nWBqN%2FOkcCc16RoJajl%2Bq%2F%2F9rFkNzHOhb%2BgoAit62C3kYlFsrGXEDe2IQnY0FQba3ZcDykDphMeR9JpvNFy38ro1Qzt4UxIJ46CSAMm7rZB%2BqZBZYNGNeGqFVd3IuoXC14fYTmqXxZotMf2Td8M45M0QXlc3papmQj2%2BzfWHjWjIB9dPVtZfRH52W85yFz8%2Fm9NczEpKo1WxzZJ265ou2tqW%2FApRYXtqDlLZWGaU%2BNKXT1CQj1PGFNOwXrvZHuvLap%2BVEmLa8HoT3FOqnHQWrUtCViRExd2RZly5KFrBbjl1bdEtiH%2F0LR8ck6xZaQsnt7uccxUQhSU3k0v59%2FumhsY%2BYqwzag6HqTY20pZKLwCp7iHCOMuZutVfl%2FHfY3ffzuhJtGb3Jll%2B0xwFWSaMjcY1HP4rhx%2BdTb8UwEManVt95xy%2BLZwcCsY0qNuH4QpnkP7WDSXIOFE5yB980QjpzGPKps2AtlgAbjDq%2FdLJBjqkAW%2BH8l%2FhNqBpmHmG9jv9FmvnY%2BH8SKBiyTAJXMfqanCxEgniV%2FIEglxONwynKSMKck24h4why5798qhiq5d7jkeK02QGMl3ERMp3I8iOHdpdMPlWcHKxupGxkZktQRY67a1Q1CSPwFzBqtM%2BtJbkqP2X%2BLq1XWv%2F8CYKGabrHOqaYPFn7AvRWdyJmtKqOsa9lpiuMBtLqXV76p9zmIF712j%2BiuV4&X-Amz-Signature=01dcd91413b70cdcb4d3b1c1a8b358152f69f3672ddcda6290c23025227f7980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIQHN2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5PszAo1%2Br9DGYndWEag%2BuB3Smn8lK%2Fz0afI24tnp0yQIhAKQYsfPmwcmb9QlzfYsaJ5zF2JdC5XrximpynQ%2Fp96meKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1K2kS51841qoa1nwq3ANpO1zb3xNNNasaTnZ8v4WZvdtgUOt8uGW7ASj5LpbCX8IWMnNh1g7s6mSJqBX9unG%2Fhm8nr3Kq%2F2DS9uJt1FhFwpjEZn3gvKBM14GmPxpWIOA7PO4ICqbz3tKS%2FaMu57vmjSBIvuZr8%2Bj6N0TVJ5ukg857nWBqN%2FOkcCc16RoJajl%2Bq%2F%2F9rFkNzHOhb%2BgoAit62C3kYlFsrGXEDe2IQnY0FQba3ZcDykDphMeR9JpvNFy38ro1Qzt4UxIJ46CSAMm7rZB%2BqZBZYNGNeGqFVd3IuoXC14fYTmqXxZotMf2Td8M45M0QXlc3papmQj2%2BzfWHjWjIB9dPVtZfRH52W85yFz8%2Fm9NczEpKo1WxzZJ265ou2tqW%2FApRYXtqDlLZWGaU%2BNKXT1CQj1PGFNOwXrvZHuvLap%2BVEmLa8HoT3FOqnHQWrUtCViRExd2RZly5KFrBbjl1bdEtiH%2F0LR8ck6xZaQsnt7uccxUQhSU3k0v59%2FumhsY%2BYqwzag6HqTY20pZKLwCp7iHCOMuZutVfl%2FHfY3ffzuhJtGb3Jll%2B0xwFWSaMjcY1HP4rhx%2BdTb8UwEManVt95xy%2BLZwcCsY0qNuH4QpnkP7WDSXIOFE5yB980QjpzGPKps2AtlgAbjDq%2FdLJBjqkAW%2BH8l%2FhNqBpmHmG9jv9FmvnY%2BH8SKBiyTAJXMfqanCxEgniV%2FIEglxONwynKSMKck24h4why5798qhiq5d7jkeK02QGMl3ERMp3I8iOHdpdMPlWcHKxupGxkZktQRY67a1Q1CSPwFzBqtM%2BtJbkqP2X%2BLq1XWv%2F8CYKGabrHOqaYPFn7AvRWdyJmtKqOsa9lpiuMBtLqXV76p9zmIF712j%2BiuV4&X-Amz-Signature=b4b40eb98d6f7fa006cd1d16fe91a7260d2432430c1c424ae17f159e8c783b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

