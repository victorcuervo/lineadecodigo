---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6KXRIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FHivmnvtkIKlX1fv7rHlMk4uBpRk%2B%2Bov3mUfRy4Tz%2FAiEA4TGSv3B1bza7rlG3g%2FfQtfuyoK%2F3cC89em7Q8elIUxAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMeLwDZdOJ0nXQgz2yrcA3sHT5LIgv23zFpRZjIEHgYMDf06ZmAbSIy%2BktC86x0j5MP9Alen8Pj35unocbodb%2F%2Fc7u2GVVzjt7rWP%2BrZutgBX9jJkBDTJ3V93F4cJK7Skkj%2Fk7htI31JTn06EgDl%2FwAwG%2FsSRwEGSkS20G1vBC2qWG7ylE7uI%2B0iFsl5%2FnGHjQekkCPkpAPKHsR3iM9BkceGA%2BnWjbZxsfwO7%2Bz9i54%2Fqfdbxuf%2BZsC4D280%2BuYYmzQ4JtTZMoaZzthLWH29dswVvFtcedwthtuS8NnejEJh1YdyKuFK3GoKvz2c7RIZBNlyz8mQ2bWEpP%2FqP8Xd3qKESqX%2FotDgXRO4kT5xZ7XZwD0FagRF1lXoONgWch8ttEqn6JBFxvA%2FmtKoxw5XE9X2Dy8D8Zw2X051%2FvF8gz%2BN1cfZdVojyOVD%2FynABQwetHrYiVTTFTsRKjWaN99ekXu1KdLGbIb7kj3feDW3vKKezS%2Brh6eP0oRWnp2gv5M06AjICnTRPSjWc0O6MjxFrplv4TRzE56g5EcFAx%2BPB8qkJ2rC7xedK%2FvjD9p%2ByH%2BkFQ3B%2FluVbUTOyPvy88qKkqoOg48dCKTBJ%2F8ikquhVtuSDNuhJ1sqc1pkYi5oeVynYnf9tTCFamc2v9pWMMTT0skGOqUB5Y77g7GvHIFxA7NAVFjIeLztL5qVvJNWaOvHQTUvBwMFUoSgUBfLZY%2FqFpxYyvVEdrLJ1SS0XkAy401xzLvWjXmQvN7UF2ZkWlMCWb0%2BI8QmbnodZ4ELD%2FHdZZ65XOUWYc8JD79w1WrJRniOX3UZJ0U6F2b1inio56BGaO2NXr%2BZgERPRR%2BTJElC%2FVXhkBNy8F8i2jT%2F0SkTN7GeCMvJDGWn0hQ0&X-Amz-Signature=ddc67787a3baa56b78211056195cfddce562c540c57b877d3effd4c88e612498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6KXRIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FHivmnvtkIKlX1fv7rHlMk4uBpRk%2B%2Bov3mUfRy4Tz%2FAiEA4TGSv3B1bza7rlG3g%2FfQtfuyoK%2F3cC89em7Q8elIUxAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMeLwDZdOJ0nXQgz2yrcA3sHT5LIgv23zFpRZjIEHgYMDf06ZmAbSIy%2BktC86x0j5MP9Alen8Pj35unocbodb%2F%2Fc7u2GVVzjt7rWP%2BrZutgBX9jJkBDTJ3V93F4cJK7Skkj%2Fk7htI31JTn06EgDl%2FwAwG%2FsSRwEGSkS20G1vBC2qWG7ylE7uI%2B0iFsl5%2FnGHjQekkCPkpAPKHsR3iM9BkceGA%2BnWjbZxsfwO7%2Bz9i54%2Fqfdbxuf%2BZsC4D280%2BuYYmzQ4JtTZMoaZzthLWH29dswVvFtcedwthtuS8NnejEJh1YdyKuFK3GoKvz2c7RIZBNlyz8mQ2bWEpP%2FqP8Xd3qKESqX%2FotDgXRO4kT5xZ7XZwD0FagRF1lXoONgWch8ttEqn6JBFxvA%2FmtKoxw5XE9X2Dy8D8Zw2X051%2FvF8gz%2BN1cfZdVojyOVD%2FynABQwetHrYiVTTFTsRKjWaN99ekXu1KdLGbIb7kj3feDW3vKKezS%2Brh6eP0oRWnp2gv5M06AjICnTRPSjWc0O6MjxFrplv4TRzE56g5EcFAx%2BPB8qkJ2rC7xedK%2FvjD9p%2ByH%2BkFQ3B%2FluVbUTOyPvy88qKkqoOg48dCKTBJ%2F8ikquhVtuSDNuhJ1sqc1pkYi5oeVynYnf9tTCFamc2v9pWMMTT0skGOqUB5Y77g7GvHIFxA7NAVFjIeLztL5qVvJNWaOvHQTUvBwMFUoSgUBfLZY%2FqFpxYyvVEdrLJ1SS0XkAy401xzLvWjXmQvN7UF2ZkWlMCWb0%2BI8QmbnodZ4ELD%2FHdZZ65XOUWYc8JD79w1WrJRniOX3UZJ0U6F2b1inio56BGaO2NXr%2BZgERPRR%2BTJElC%2FVXhkBNy8F8i2jT%2F0SkTN7GeCMvJDGWn0hQ0&X-Amz-Signature=f526c0ef3d8c5eb16d29a75528286ba189560ee8610d9ce9076d8f222ba1eff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

