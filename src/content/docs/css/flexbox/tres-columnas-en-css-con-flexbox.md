---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYYRVTN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPL5%2FaZU8kQLPMXWZCtJrZs2DaaBB4ybFEYCi3mUi0YAiEA5v2ZDaFGqxIanvM79ltfEbjXaCQUJ7RbE%2BzZSXvutt0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BuIUlP5DtspwXv1ircA5iw5VjcgCzHFpq%2Bhu9XIi0u3Lrs9OZysY6XEbIgvy0x8v3%2BUUnLhwKkVoIUbOFldCi9J%2FDkh2yd6fIFuNh%2BjP5YetJe0JLqHAuUZ6z2gDBMvtn41QmZgRTwekFm5qZIRCeL5p5POf4FHkNsjupC3ituxV%2BLsFl4dUSp0%2F5x9nyh5lp1TgW%2F5YBNEtpmVL1j8KCokw0FVD4ToK32Llb2rME4jIUmxIsPqfyU3%2F6U%2BhEEjdVCQBKKFUdVrhhj1eGG1gjeEhVhuj%2FF5MpALjJK8Hvl56lqW8PYSsOxTnfJnigBtyjwDU510KzkuLW%2BSuIShxreEed8Ryzd%2FYRpzHfvKPw3ugzN8agqg5pNc2nnSEtewVksL3jT0siRxJ6rlcAkL2g0Rqgq51JHsi797ECzoGqiILNvaIN35Kxrhzhg5M5B%2BD%2FzuQE6sc9OZVqyiZe48KFdxTL5Bqtiwb5M4DTu7f03Vgo986MQ0t%2B1EJhWxHVm7nBHQleBkoavYZjZzMZGUQZ8iv3iUVvlRvFKwF1M4Lo3T7f03B26jQHU%2F0YDzXS61MzlRR9fOuyssrpo5Q%2B4qsU4Y%2BUx%2BAJCRanae6cA9APDUdhswnrc5uAuoFLuL3yA2Po26i6RwRr0wKQNMJrI18kGOqUBKC6lW0%2B5BjvrCiuVXBeBg5xQ7zkLo%2F%2BEvOpbSSjdCZVjGc%2BVeqKi4BQd1SJzRU0Kb%2FEygvYvf0G73XCB78gPyCSormtRon9zvsdF%2F%2B56rhL88eAbVHb9jS44slm47ZqYoehg1ozU9LigCP7p6slgnsEqNx%2BUyvQy8tJiiWhcKyNccnSuPCvsduluSJdQw7B2ki7IOOME2bmpQmubvxx0pGu%2Fd%2BUB&X-Amz-Signature=a9ec5130a25145cca09156c7536e9ee02d7bf89ead2dacaf3341feff24893902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYYRVTN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPL5%2FaZU8kQLPMXWZCtJrZs2DaaBB4ybFEYCi3mUi0YAiEA5v2ZDaFGqxIanvM79ltfEbjXaCQUJ7RbE%2BzZSXvutt0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BuIUlP5DtspwXv1ircA5iw5VjcgCzHFpq%2Bhu9XIi0u3Lrs9OZysY6XEbIgvy0x8v3%2BUUnLhwKkVoIUbOFldCi9J%2FDkh2yd6fIFuNh%2BjP5YetJe0JLqHAuUZ6z2gDBMvtn41QmZgRTwekFm5qZIRCeL5p5POf4FHkNsjupC3ituxV%2BLsFl4dUSp0%2F5x9nyh5lp1TgW%2F5YBNEtpmVL1j8KCokw0FVD4ToK32Llb2rME4jIUmxIsPqfyU3%2F6U%2BhEEjdVCQBKKFUdVrhhj1eGG1gjeEhVhuj%2FF5MpALjJK8Hvl56lqW8PYSsOxTnfJnigBtyjwDU510KzkuLW%2BSuIShxreEed8Ryzd%2FYRpzHfvKPw3ugzN8agqg5pNc2nnSEtewVksL3jT0siRxJ6rlcAkL2g0Rqgq51JHsi797ECzoGqiILNvaIN35Kxrhzhg5M5B%2BD%2FzuQE6sc9OZVqyiZe48KFdxTL5Bqtiwb5M4DTu7f03Vgo986MQ0t%2B1EJhWxHVm7nBHQleBkoavYZjZzMZGUQZ8iv3iUVvlRvFKwF1M4Lo3T7f03B26jQHU%2F0YDzXS61MzlRR9fOuyssrpo5Q%2B4qsU4Y%2BUx%2BAJCRanae6cA9APDUdhswnrc5uAuoFLuL3yA2Po26i6RwRr0wKQNMJrI18kGOqUBKC6lW0%2B5BjvrCiuVXBeBg5xQ7zkLo%2F%2BEvOpbSSjdCZVjGc%2BVeqKi4BQd1SJzRU0Kb%2FEygvYvf0G73XCB78gPyCSormtRon9zvsdF%2F%2B56rhL88eAbVHb9jS44slm47ZqYoehg1ozU9LigCP7p6slgnsEqNx%2BUyvQy8tJiiWhcKyNccnSuPCvsduluSJdQw7B2ki7IOOME2bmpQmubvxx0pGu%2Fd%2BUB&X-Amz-Signature=0d300b1cef62a99374a48b33de420c0eb04d1462c17d1285eacac1c02a22c5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

