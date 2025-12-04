---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQL6GR3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC17HfmKz2xJuq6Z4q9Ad2aVEhRw54JGlRz72%2FDbRqupQIgVnZQbob%2FC39SjYm%2FbGJGHxsXwzra08oH5VKzUEKKMjUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLB7wg7ExAaEyleb8ircA9vRbTKEMdnZPvRAJQHSWtZhBJ0GITZgfp8qkApI%2Fa66GnRcYoA8tCzuGYnpUXqol1eWWq7LXGKPV5IoWvBBUSPt%2BxHL%2BfVO4%2BRrAoBE1%2FYAH7A1NmTJt12rKkIah7FNqqKduUFifTchhJwqsU5TpCl%2FWYJa6Zl2%2BtddYvYMNhvrv%2BP9xoGvZ45%2FLa2GjdtU20N5HIe2YhGyuosc7jXty19VWbMMR6f9ezBwY1C36gTKQ0leM3TkthDqteSO1a%2F9sYfYY0zW2HIidyxDz%2BfWcJ45oYAviouRN59DET1KsQiuP6S36LwAJoHEJ6SrkzY4%2BmyKKAGV1sAi8bdw6XjqoEpdj4XEf8Vxw66UIalIBaBi3NSHpswxCNTJ6eX%2FU9MrEzBgSFbg4KCZU%2BxjnwNYQR1xd0R0yQvuwoj2v4E7JJggf%2BG0P30VsBESgqoYxoPVQlK%2Bgf0RV9tUp74uLmbCZYJ6WhVN%2BW3sQ%2Bh%2Fwf%2FgKPoa2yhrhW5xQ48PjYlaCQrMbJXei89e8g5GPLsCcZZLYgGDzj2rq83vaI%2Br7%2Fh1WwQecRgrZIS%2FFv0HwXlKRbs0txdgO0g3JtzAaFcwncKaxzNRRRNUUxkS8khou6mHG5JDNxeE1XwUqhoTc8lFMLaDxskGOqUB9AtM%2BZrbnCaRhjBQzkISK1%2BdejLhVCiecKFeBoquhoqyX4j%2FlCMRn7VKriF19zH9pqa6LfGvnSrnbAfo6DAMhfAko4UQtY%2FhKFWIcrgumcrWxDOXFO%2BlsBuMYXc6i6t0SiNpEPHZkItzXcLg35eCk62USGaNVphSsVKe5ry4OyR%2Bud9fnKqIfiuyczg36fItP5EgPRAcQGGvXKn0g1M62i%2FTEh9q&X-Amz-Signature=8a38eb1661ab2f9a29c4b7595aea5759bb1f640ac99279e981ac522f29fce97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQL6GR3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC17HfmKz2xJuq6Z4q9Ad2aVEhRw54JGlRz72%2FDbRqupQIgVnZQbob%2FC39SjYm%2FbGJGHxsXwzra08oH5VKzUEKKMjUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLB7wg7ExAaEyleb8ircA9vRbTKEMdnZPvRAJQHSWtZhBJ0GITZgfp8qkApI%2Fa66GnRcYoA8tCzuGYnpUXqol1eWWq7LXGKPV5IoWvBBUSPt%2BxHL%2BfVO4%2BRrAoBE1%2FYAH7A1NmTJt12rKkIah7FNqqKduUFifTchhJwqsU5TpCl%2FWYJa6Zl2%2BtddYvYMNhvrv%2BP9xoGvZ45%2FLa2GjdtU20N5HIe2YhGyuosc7jXty19VWbMMR6f9ezBwY1C36gTKQ0leM3TkthDqteSO1a%2F9sYfYY0zW2HIidyxDz%2BfWcJ45oYAviouRN59DET1KsQiuP6S36LwAJoHEJ6SrkzY4%2BmyKKAGV1sAi8bdw6XjqoEpdj4XEf8Vxw66UIalIBaBi3NSHpswxCNTJ6eX%2FU9MrEzBgSFbg4KCZU%2BxjnwNYQR1xd0R0yQvuwoj2v4E7JJggf%2BG0P30VsBESgqoYxoPVQlK%2Bgf0RV9tUp74uLmbCZYJ6WhVN%2BW3sQ%2Bh%2Fwf%2FgKPoa2yhrhW5xQ48PjYlaCQrMbJXei89e8g5GPLsCcZZLYgGDzj2rq83vaI%2Br7%2Fh1WwQecRgrZIS%2FFv0HwXlKRbs0txdgO0g3JtzAaFcwncKaxzNRRRNUUxkS8khou6mHG5JDNxeE1XwUqhoTc8lFMLaDxskGOqUB9AtM%2BZrbnCaRhjBQzkISK1%2BdejLhVCiecKFeBoquhoqyX4j%2FlCMRn7VKriF19zH9pqa6LfGvnSrnbAfo6DAMhfAko4UQtY%2FhKFWIcrgumcrWxDOXFO%2BlsBuMYXc6i6t0SiNpEPHZkItzXcLg35eCk62USGaNVphSsVKe5ry4OyR%2Bud9fnKqIfiuyczg36fItP5EgPRAcQGGvXKn0g1M62i%2FTEh9q&X-Amz-Signature=b6553c48446095d40398847837e3b5dfa7f08e2be447aa3419c9119aca62bb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

