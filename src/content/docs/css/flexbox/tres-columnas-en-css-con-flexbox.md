---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JEI26X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo%2BCz0LCwEhEnSmCWDvei1Vc5BX5BnBmfw6oNONzsBAAiEAh7x41pmSNIDP%2F%2FQ5u2a17jK6OxDBWAxgGEkJ43IKX1Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCGgIYefIeFA%2BbBYBCrcAyHyr1835CBa0Fr6m7o26NSOi4mAG9k1AGGybOdEqn%2FVFB0cdIffSUzf%2BG2Uuf%2BJcjrzblaW0YdF%2Fkva84ay8jVUyXwu4nBZQ2m3TbU3hB1ofewD7MapDYWK63Gm4nsP%2FI8Ri0GJ1RKGoHGh8%2B5aJyU9OKK1s3CG8M88m1P%2Bm5bS55BPG0sMaGnekugPoL%2B8evpyq%2FHCA7KsRXVLIi2TjbFzt25AgkcT2h9Py7APem%2BQuptrIWiHWSzcccUARpW5csYWIAxkMfW9eUkgnvQqs5xqKGKyeylhryfQjtudKGNNPtaigmqK0ruDz1v9CU1OtEK6v%2BuMloGzz5SjdtC3oM9w5oxMTeSOjkIdT5mR%2BcqA9pA7FH5dJmjgwcMP9EPWITHlKIsnm5l5J7F6jl%2FvBct%2FiiNN0iCZvbuDW%2FT9Ba9MWzBQSpEaQgfIs9%2BJRUSDinM2FMjUym2XbZDOx3Y7TAdfs3CDi2jaw33jEJqG44OXgEN88j5QWw8X0lThIg%2FMA64XuMMA7rHEwAghi9c5oCW1GMR%2BqaoiLgNoTExJSda40oAkCA0Qa1xjsjllC37iVxg7kZkZXzKhg16FqfqKZX6RdWSnFRvFhu9S8QMZqfMZP%2BgZgs8rN3RgVZrWMJDJy8kGOqUBK7nbJ3PpnRN1w%2FfLhad8umedAVe0NFjop%2FH%2BIn5zAaTUO9MK%2Bf3AKIL%2FYZllKQe%2FfslZqAxMOU2BA6A5yEtHwuY5zZkpzVv4sKfjrAV%2FBhgzhUrMxXY4N1iDkiPJ2JJ38HNWx0N9d6Z3G3uNQzCZPRu1KbAwY3beAo8sZ189dTzApg4jyVVipTq1jY%2FY17V2wT6NseWVh1PqPbyAuzVWGpokhYV4&X-Amz-Signature=1be0a59a6ac9251db64100c92502eabeb7c6b3e81909e49c2fd1042071029c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JEI26X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo%2BCz0LCwEhEnSmCWDvei1Vc5BX5BnBmfw6oNONzsBAAiEAh7x41pmSNIDP%2F%2FQ5u2a17jK6OxDBWAxgGEkJ43IKX1Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCGgIYefIeFA%2BbBYBCrcAyHyr1835CBa0Fr6m7o26NSOi4mAG9k1AGGybOdEqn%2FVFB0cdIffSUzf%2BG2Uuf%2BJcjrzblaW0YdF%2Fkva84ay8jVUyXwu4nBZQ2m3TbU3hB1ofewD7MapDYWK63Gm4nsP%2FI8Ri0GJ1RKGoHGh8%2B5aJyU9OKK1s3CG8M88m1P%2Bm5bS55BPG0sMaGnekugPoL%2B8evpyq%2FHCA7KsRXVLIi2TjbFzt25AgkcT2h9Py7APem%2BQuptrIWiHWSzcccUARpW5csYWIAxkMfW9eUkgnvQqs5xqKGKyeylhryfQjtudKGNNPtaigmqK0ruDz1v9CU1OtEK6v%2BuMloGzz5SjdtC3oM9w5oxMTeSOjkIdT5mR%2BcqA9pA7FH5dJmjgwcMP9EPWITHlKIsnm5l5J7F6jl%2FvBct%2FiiNN0iCZvbuDW%2FT9Ba9MWzBQSpEaQgfIs9%2BJRUSDinM2FMjUym2XbZDOx3Y7TAdfs3CDi2jaw33jEJqG44OXgEN88j5QWw8X0lThIg%2FMA64XuMMA7rHEwAghi9c5oCW1GMR%2BqaoiLgNoTExJSda40oAkCA0Qa1xjsjllC37iVxg7kZkZXzKhg16FqfqKZX6RdWSnFRvFhu9S8QMZqfMZP%2BgZgs8rN3RgVZrWMJDJy8kGOqUBK7nbJ3PpnRN1w%2FfLhad8umedAVe0NFjop%2FH%2BIn5zAaTUO9MK%2Bf3AKIL%2FYZllKQe%2FfslZqAxMOU2BA6A5yEtHwuY5zZkpzVv4sKfjrAV%2FBhgzhUrMxXY4N1iDkiPJ2JJ38HNWx0N9d6Z3G3uNQzCZPRu1KbAwY3beAo8sZ189dTzApg4jyVVipTq1jY%2FY17V2wT6NseWVh1PqPbyAuzVWGpokhYV4&X-Amz-Signature=55e9870e979c2bca5e038b1729ff4a1e092ab5233bda4e46e9f66327b449ac8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

