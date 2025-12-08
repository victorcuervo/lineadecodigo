---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI5OZCE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPeMWv%2BW5zoysTDwKqnhHhPe%2FVufzcSaUEH3555kCcNwIhAIvUeOhl4W0DnwJVc2lKuKRc6ZBYcSiS0oMSQA4lPhvQKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyQxWdXpADM6rNZQq3AOK8u2H9YDWHWRVnNaKqonybYoC4OLm4t%2FNbNm94LsyWPe7DlMp51%2F3bkBwBmHJOoDGGsgj8VAV5dqchwZcWAr9n7KGjzk1ikRfl7qREzMvh9r4DZCe4p4FB75nL1Sju%2BKhvPGgAeNT4Meu5PvmTQVQKCA1%2BJRiwOWff2CEjAo480NQ0Unem%2BHx0de%2BLGfx%2Fj%2F1RhE7Q2RBnZrYlW0JEDoB8NZDdAG8g6JNoGND3kWqtdqOU%2BhPI1t4YgW7xI9jV%2F5tc3%2BTrIhWUBMRD283teo8dYvJSAd%2FNB%2FtGZn7uLQG5I29MYG4ZVkmpkVZI4YayInYBujNkq0wA5j54WkofmcVNqovSs7tBHtNTojeOnOwj0B20oQIvnzxQeFXeI%2F%2FeK6QlP03kkKZU50h06JWu01%2F%2BTgeIC7Nk0%2BZQJy9vko%2FzSwqAkf7lYVdehzIboieMxb7Ec0Jg6LCDLMyIBoEFH7Ml6H5ws%2FgBymZNxKZcPCuoCY%2FzIK7KoGfJQTze0KOOj05Eijl6ExQ4PxLTpmF9DEo0cdIsidvzEaY4bhhOvNCuMX1PRV2RN7WTUIIy%2B%2BbSzdxEUD9bTINPjcrjtrC0oZFmVUuivGNg%2FOxzmzSEzlgB32vs3Ne7EY3TjRdzjDl%2F9zJBjqkAbztwRGX0JVLdR9zrYELkd18wJblsNWeRowbRrg0oYL%2FgXeycK3uD6UCNNmvcP6Qx%2F0SITCDz1hssXpMYhH%2FFUTxl80tPQxxguyhTrCoRJUgjsZPQzXsX6j5GWo3TlAGWQSb78DNTDAAD6QScwG7H%2BUF4QjR2RmVOYNWKT5FXuYetKYNh8Oy0G4TCb1h6LL4XGkrfuEbqlpExqAvBEmhJHRSIY8B&X-Amz-Signature=1ca7aa26e9963ae912831778c1b797dc7aa8995778c477b18908017c72db9d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI5OZCE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPeMWv%2BW5zoysTDwKqnhHhPe%2FVufzcSaUEH3555kCcNwIhAIvUeOhl4W0DnwJVc2lKuKRc6ZBYcSiS0oMSQA4lPhvQKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyQxWdXpADM6rNZQq3AOK8u2H9YDWHWRVnNaKqonybYoC4OLm4t%2FNbNm94LsyWPe7DlMp51%2F3bkBwBmHJOoDGGsgj8VAV5dqchwZcWAr9n7KGjzk1ikRfl7qREzMvh9r4DZCe4p4FB75nL1Sju%2BKhvPGgAeNT4Meu5PvmTQVQKCA1%2BJRiwOWff2CEjAo480NQ0Unem%2BHx0de%2BLGfx%2Fj%2F1RhE7Q2RBnZrYlW0JEDoB8NZDdAG8g6JNoGND3kWqtdqOU%2BhPI1t4YgW7xI9jV%2F5tc3%2BTrIhWUBMRD283teo8dYvJSAd%2FNB%2FtGZn7uLQG5I29MYG4ZVkmpkVZI4YayInYBujNkq0wA5j54WkofmcVNqovSs7tBHtNTojeOnOwj0B20oQIvnzxQeFXeI%2F%2FeK6QlP03kkKZU50h06JWu01%2F%2BTgeIC7Nk0%2BZQJy9vko%2FzSwqAkf7lYVdehzIboieMxb7Ec0Jg6LCDLMyIBoEFH7Ml6H5ws%2FgBymZNxKZcPCuoCY%2FzIK7KoGfJQTze0KOOj05Eijl6ExQ4PxLTpmF9DEo0cdIsidvzEaY4bhhOvNCuMX1PRV2RN7WTUIIy%2B%2BbSzdxEUD9bTINPjcrjtrC0oZFmVUuivGNg%2FOxzmzSEzlgB32vs3Ne7EY3TjRdzjDl%2F9zJBjqkAbztwRGX0JVLdR9zrYELkd18wJblsNWeRowbRrg0oYL%2FgXeycK3uD6UCNNmvcP6Qx%2F0SITCDz1hssXpMYhH%2FFUTxl80tPQxxguyhTrCoRJUgjsZPQzXsX6j5GWo3TlAGWQSb78DNTDAAD6QScwG7H%2BUF4QjR2RmVOYNWKT5FXuYetKYNh8Oy0G4TCb1h6LL4XGkrfuEbqlpExqAvBEmhJHRSIY8B&X-Amz-Signature=e28c4c263dbaee3a80f73877c4ef5e0ad851265392f22bb3702c0b19b6107e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

