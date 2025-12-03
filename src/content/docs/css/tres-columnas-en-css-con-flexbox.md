---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGTXETO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCO1y%2BQ7%2FCukOy9DpONGp1E%2BDXHcZbUu9Rc%2FCnhBOfyiwIgFCvy6PK%2BwERz2q9ctLgq5gHtwPYCCUUYi84Jzc%2B%2Ba4kq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPuJVCMXKrVVD4sKlircA4WW8%2Bl5fb5i1eYU%2BzKIdr6CQMpja%2FvTt4%2BVfQjdS9r%2FXLNR95c2ywwUDA2SaBqj4XpX3YGgXPKinQ%2FKohjwVtvBKVNYgTGwClMJF2WoY0XPp8n%2FzE9ypi6k9nH2kHjrmRA8milCWCVnb8ywJG0wo2xxt9HMy9SQMVLrV41Vem7iJqoR2CAPU4bC0wA4K26LZ72VyAW2WE1bd2w7ExpmTv6%2FEpDBgNLXfUefz%2BQJqjYMIx9jWfY3iJIr6SbFHVp7k08Wlem8ekkeWAv57Ga1XG6NbfOqUB8kKjnUuEfAW0vg6ujL39O%2FsIhfzl6XRpCb%2FTTvgN6HBcL29F8luOxJhWL5wjRhcfmO0dvlSV0FmZGGaMlVvgqDMG7HfjxtKdyncohzwr1y4ydGIpEemSenXaqysJOo2SH2D1o%2BM8ZNQlxnkAj4ruRPToS7%2Fr4FZ6FldQDzPhTPT1yZQuJdoseeb1ONxkA7L1Q%2FFumd5ZU7DBMExh%2FQIKNIJ5cSgOE%2F8j7UYCyT%2FoMYf%2F%2FAaKCyuetxykG7wH2KpjSZBJqIIxBLkx9tqMJE9%2Flk8bfJ84P97GfidpsMwz6jFx3%2F7MXgQAKJjKpw7NeNyEf6gfL6NT6z3WMSD0hZ4c059eVPZiDIMI7cwskGOqUBvJgVXdPm1Tnbkgdx%2FRwB9v%2BblFqn2L05GXC%2BWtajiCnMmQeFgRGOgDxsnI0MjTq1Ihp6WBV75JnvtwHbG6OAuj0PUCvUhGHp2oQgw6SNqQPZ5njTUVPYaYhEAKVIiSGtFmKcJNkVoOKYalyRl0bXlAkuH%2F0%2Bd3j64q7MOSG%2Fi8IO5TAQ9tdE1gHKfvyh3XigotBgSddWwXKMUQxppdq9Fatym%2B63&X-Amz-Signature=a38a5f429803116505b844f792a2456d430fc8b39789aa7aa1c041ffcb4fe262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGTXETO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCO1y%2BQ7%2FCukOy9DpONGp1E%2BDXHcZbUu9Rc%2FCnhBOfyiwIgFCvy6PK%2BwERz2q9ctLgq5gHtwPYCCUUYi84Jzc%2B%2Ba4kq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPuJVCMXKrVVD4sKlircA4WW8%2Bl5fb5i1eYU%2BzKIdr6CQMpja%2FvTt4%2BVfQjdS9r%2FXLNR95c2ywwUDA2SaBqj4XpX3YGgXPKinQ%2FKohjwVtvBKVNYgTGwClMJF2WoY0XPp8n%2FzE9ypi6k9nH2kHjrmRA8milCWCVnb8ywJG0wo2xxt9HMy9SQMVLrV41Vem7iJqoR2CAPU4bC0wA4K26LZ72VyAW2WE1bd2w7ExpmTv6%2FEpDBgNLXfUefz%2BQJqjYMIx9jWfY3iJIr6SbFHVp7k08Wlem8ekkeWAv57Ga1XG6NbfOqUB8kKjnUuEfAW0vg6ujL39O%2FsIhfzl6XRpCb%2FTTvgN6HBcL29F8luOxJhWL5wjRhcfmO0dvlSV0FmZGGaMlVvgqDMG7HfjxtKdyncohzwr1y4ydGIpEemSenXaqysJOo2SH2D1o%2BM8ZNQlxnkAj4ruRPToS7%2Fr4FZ6FldQDzPhTPT1yZQuJdoseeb1ONxkA7L1Q%2FFumd5ZU7DBMExh%2FQIKNIJ5cSgOE%2F8j7UYCyT%2FoMYf%2F%2FAaKCyuetxykG7wH2KpjSZBJqIIxBLkx9tqMJE9%2Flk8bfJ84P97GfidpsMwz6jFx3%2F7MXgQAKJjKpw7NeNyEf6gfL6NT6z3WMSD0hZ4c059eVPZiDIMI7cwskGOqUBvJgVXdPm1Tnbkgdx%2FRwB9v%2BblFqn2L05GXC%2BWtajiCnMmQeFgRGOgDxsnI0MjTq1Ihp6WBV75JnvtwHbG6OAuj0PUCvUhGHp2oQgw6SNqQPZ5njTUVPYaYhEAKVIiSGtFmKcJNkVoOKYalyRl0bXlAkuH%2F0%2Bd3j64q7MOSG%2Fi8IO5TAQ9tdE1gHKfvyh3XigotBgSddWwXKMUQxppdq9Fatym%2B63&X-Amz-Signature=e8348a92252ce7f68a30bb50c55cbd53e16b6a3b738b3f48736e84ac98ddb5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

