---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23ULWH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATQSEDGxWQuQWsh3qbEprCDu4AE5unjv9SXu5NbPmbWAh99Vgu8F147qiSjFDB0x5wZcrfnXexBheDCy8CaHRauKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Ti6sCVEU8OYLha4q3APya%2FoPHXZUvirzVEVDqLzpqMd8GkEcsDXKU8Dn%2ByXokOEixWp2hmAztfDNjf4M35r3%2FpBeJqW8t4jxdez4CiDkRxY4tWo3RgM34P10h9WJq74Wq6enmXKQ3KgGQ%2FgzteemfxmnL2CNS1rxy7bGQnmNAF7Wdr5nFYhyAbf%2Fwwv23IDDkVAXv198KhqphVP9NUM6XOOAR8NRimd9B9wyadNutNygGpn1gysrAVwdv%2FYsZjevCMnmt49B0DSYvqGih4U7PLcj8gT3dh%2BwR6sADa2sUYPDBvARgT%2BP%2FjJ73ZhyT%2F3YFLV%2FWzvt5lXn6tTkiLt4OlAvsLhpgbqXQ3e24HevLrm7NUuQyx31c4zEIT%2Fh39AvulOcrtqdqWVVUK6vjFtDkjzMyjYqGE4vg5tLIgXfNZ21S1dEXW0W75ieuYk9VhOUVgMBVb47IXa3AZIygxOB6NhSxMJJgdVSmkcAO%2BUilM9dTKKy2mkMmPKWTEH0LD%2Fi2JTC1mGWYMEQqYL8guk7wV%2FSHL9FLmBNEurUp3r20tHc%2FDlAHC9hRXl%2BIi7LrVNnSoH0YVD9P8LgQ2OIbJDlaFZxaMtbV1P70GsMBE1v91X2FjcAV2QBTN7XZIAzHMYR1re50q2iQPA3hzDyiN%2FJBjqnARS6zqjZka1T5jB%2BFfSXrB6wdDiYiLFiST50dofSNgvNK0JU%2FnkkKwAOn9vF%2FX5Ey14%2BeBqraekdPpmYzBNGr2g1%2BBnNCRSxiQgB%2BD00DkdY4k9TqFD5sY4TLmiXBzLEFL%2F23ph0Yd9uw3YEKi3gbMV1lt7OThFEBX2U3YWxqqO0aWdGthjOFX0PrFuQb%2B6ZmnAmbOM%2BrTb%2FQByam7DpF3yoztuqcHwA&X-Amz-Signature=52652670c996b9a4a0122aff3a0eee991f001b328744ce714c8f6db96142a10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23ULWH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATQSEDGxWQuQWsh3qbEprCDu4AE5unjv9SXu5NbPmbWAh99Vgu8F147qiSjFDB0x5wZcrfnXexBheDCy8CaHRauKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Ti6sCVEU8OYLha4q3APya%2FoPHXZUvirzVEVDqLzpqMd8GkEcsDXKU8Dn%2ByXokOEixWp2hmAztfDNjf4M35r3%2FpBeJqW8t4jxdez4CiDkRxY4tWo3RgM34P10h9WJq74Wq6enmXKQ3KgGQ%2FgzteemfxmnL2CNS1rxy7bGQnmNAF7Wdr5nFYhyAbf%2Fwwv23IDDkVAXv198KhqphVP9NUM6XOOAR8NRimd9B9wyadNutNygGpn1gysrAVwdv%2FYsZjevCMnmt49B0DSYvqGih4U7PLcj8gT3dh%2BwR6sADa2sUYPDBvARgT%2BP%2FjJ73ZhyT%2F3YFLV%2FWzvt5lXn6tTkiLt4OlAvsLhpgbqXQ3e24HevLrm7NUuQyx31c4zEIT%2Fh39AvulOcrtqdqWVVUK6vjFtDkjzMyjYqGE4vg5tLIgXfNZ21S1dEXW0W75ieuYk9VhOUVgMBVb47IXa3AZIygxOB6NhSxMJJgdVSmkcAO%2BUilM9dTKKy2mkMmPKWTEH0LD%2Fi2JTC1mGWYMEQqYL8guk7wV%2FSHL9FLmBNEurUp3r20tHc%2FDlAHC9hRXl%2BIi7LrVNnSoH0YVD9P8LgQ2OIbJDlaFZxaMtbV1P70GsMBE1v91X2FjcAV2QBTN7XZIAzHMYR1re50q2iQPA3hzDyiN%2FJBjqnARS6zqjZka1T5jB%2BFfSXrB6wdDiYiLFiST50dofSNgvNK0JU%2FnkkKwAOn9vF%2FX5Ey14%2BeBqraekdPpmYzBNGr2g1%2BBnNCRSxiQgB%2BD00DkdY4k9TqFD5sY4TLmiXBzLEFL%2F23ph0Yd9uw3YEKi3gbMV1lt7OThFEBX2U3YWxqqO0aWdGthjOFX0PrFuQb%2B6ZmnAmbOM%2BrTb%2FQByam7DpF3yoztuqcHwA&X-Amz-Signature=88f9ceb0e426adc0f8000b4c8b4d8650c993b96f0cdc4279ee6da718472c2ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

