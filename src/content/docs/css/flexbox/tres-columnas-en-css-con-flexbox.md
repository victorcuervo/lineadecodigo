---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBY54WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCe4KxV%2BE9cEZuACbBtqiurmP8tnVM0T0aLmbQKqNHgIgTKHv9K0NP0h9%2Baq34Cbjpw%2B3QQQy8SbWmR4ZRStpiWUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7i6hTQFPz33kWYvyrcAwlI3mjxEL1McX4r%2FvtadvG1W%2BLOMlwu%2BgpJ3h3FmbYXyK%2FJfK4Lwb348H7h3k0oBQcRTTJiIA%2BomQc%2FQW4k%2FT2ArkUjNbOzJls%2BhYavmOPEOzsus5mEhcRi1sYDJSX1vmihXSSZfXTxcswRksX1b%2Be3CB8r5%2FVi2HGaIvX2ChbAIUC8rBhcF3OY5yt6gZrz70QxqZQTO%2BzxmnogETXCn%2F5YSjQiWDTMkCiad3jtnORk5%2FoBAxRhDhck%2FkvyHWPblJ9Dj6pBETbHK9JvzHSuCGWjXflktVQaA%2FeMziJp33%2F4JTu5ex2HRBUKTa%2FyS5LKUIL413o6UjBoOPXtCSyYqt7kmo6%2FJkRAwAD1IEkdlLdB9HOQKs%2FDofGvVui8CMKEuki9DpYnuG8c8MQ6N%2Bc1H6YI8GfrC%2F6aa9PlaDvVvZ4sZYnSyddml%2FdojazY49a40pNEljGRaeAMmNjiTKO4KbX4RyjtWNY3pfOWsxdGZ0mqH2ShXfrJKGQD93JwxzAFFiSfgbTCz2qjsfQoi%2Fu4rNkQvWuHSbPr5Iuk16YVAta%2FfS3soRfaDQ8wZpwFwGjpSs%2BLDuDMtDmpd6%2FSZdI5oRCiRImVv%2Fal6j0QQfJa1oi8xXhJdvCRDhVWhxTYMMj90skGOqUB49ni6phIQx0Zui8RTjxqEDmQnFat4PfVHn0JmlKSUnd0q%2FivRAPzmtBKYK%2FkcwBkJv6eB71IwLjKLz8oB9ozYFmVjl3%2FH2N2r6j3GCeYxw0N8XWcibuzawQBeBQGVfESYqLlsoonMC2onX3uIo6rD47Wczje%2F6lbK5R%2FDn5%2FzjIen%2FignuAmc5XO9mF%2Bb8uFKQEolEjN7s0X391rmuHuOgbhV8yG&X-Amz-Signature=9d8a77655885df6860cc6497dfd3182dab5e477a1a6c14d40117339d46e45ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBY54WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCe4KxV%2BE9cEZuACbBtqiurmP8tnVM0T0aLmbQKqNHgIgTKHv9K0NP0h9%2Baq34Cbjpw%2B3QQQy8SbWmR4ZRStpiWUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7i6hTQFPz33kWYvyrcAwlI3mjxEL1McX4r%2FvtadvG1W%2BLOMlwu%2BgpJ3h3FmbYXyK%2FJfK4Lwb348H7h3k0oBQcRTTJiIA%2BomQc%2FQW4k%2FT2ArkUjNbOzJls%2BhYavmOPEOzsus5mEhcRi1sYDJSX1vmihXSSZfXTxcswRksX1b%2Be3CB8r5%2FVi2HGaIvX2ChbAIUC8rBhcF3OY5yt6gZrz70QxqZQTO%2BzxmnogETXCn%2F5YSjQiWDTMkCiad3jtnORk5%2FoBAxRhDhck%2FkvyHWPblJ9Dj6pBETbHK9JvzHSuCGWjXflktVQaA%2FeMziJp33%2F4JTu5ex2HRBUKTa%2FyS5LKUIL413o6UjBoOPXtCSyYqt7kmo6%2FJkRAwAD1IEkdlLdB9HOQKs%2FDofGvVui8CMKEuki9DpYnuG8c8MQ6N%2Bc1H6YI8GfrC%2F6aa9PlaDvVvZ4sZYnSyddml%2FdojazY49a40pNEljGRaeAMmNjiTKO4KbX4RyjtWNY3pfOWsxdGZ0mqH2ShXfrJKGQD93JwxzAFFiSfgbTCz2qjsfQoi%2Fu4rNkQvWuHSbPr5Iuk16YVAta%2FfS3soRfaDQ8wZpwFwGjpSs%2BLDuDMtDmpd6%2FSZdI5oRCiRImVv%2Fal6j0QQfJa1oi8xXhJdvCRDhVWhxTYMMj90skGOqUB49ni6phIQx0Zui8RTjxqEDmQnFat4PfVHn0JmlKSUnd0q%2FivRAPzmtBKYK%2FkcwBkJv6eB71IwLjKLz8oB9ozYFmVjl3%2FH2N2r6j3GCeYxw0N8XWcibuzawQBeBQGVfESYqLlsoonMC2onX3uIo6rD47Wczje%2F6lbK5R%2FDn5%2FzjIen%2FignuAmc5XO9mF%2Bb8uFKQEolEjN7s0X391rmuHuOgbhV8yG&X-Amz-Signature=91e91ad1b8bb51ba64bb868d2a62dd10d7d09472edff16f9d1c90db30c106a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

