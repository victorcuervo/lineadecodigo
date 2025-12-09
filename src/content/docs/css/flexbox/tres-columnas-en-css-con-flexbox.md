---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPZF6WQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu4Bz392CF3fMyO54Lgoj4HnhWlitl84eG5SYQwYkP3AiEA4keVURFiZM4oIHE5%2F4vmimyOXBu8S1UFdFMPZAt%2BxZEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX617hFJp9VZldSWircAx6Dy6%2BNjeCzuLnSeNm9NRS7lYfor4as0CQd5du7AtawffH8rdT0by1Q8SN1hOQN%2F5ZyhXB1PCJGt1xBVpEEaOb60fCAk2i9rJ%2FkEKewqH1jmwkWHaY%2F8sMUBkU0sxJNRy0zXpe1EC%2Be3LYD0zWMp1YWXUPMunI1DGl5ZW4KqZ6xhA6NihaYeCnjJ1MpfLvRwdQpJNykNPv%2BqU4R1qQVwMG3MTM%2Bp%2BhO2dTjfMVaAiihNbwg4UdZ7dn29sIYvsngs3UIaw%2BB%2Bl%2BLooYWEfppt%2B3T6Thqqpbfh0%2BL98BWu7mbUGtEvRC1BMmbNCk9tXD%2F49Ir5TgOIAB76A6hOSKO93i7eAsfEywqXY7HwC2bKhjXhk7%2B8lj%2BhDLHcCqdqT4QoNyqwGVct4dQVdJ3i%2BoHORmqzWoOjnDTK3F9OZmKA25CqxzwrTKSf3EvjSqp9eAy5f0BfSVjTzScfrWWf%2BO53l9af8uYdd1jcrUlgbzk3KLNlGp6NSMEDPQt2Nro5wBc7XsP6hkbLVv8%2FeDv9RQuEMcVNtJztpQW142cqzEFVR8Yagi6OkzSBTiPmbjYG0huC8ijRjior5kgFRfv3Hg0GG0LvV6v9V2%2FsHeszxN5aAq0r9oWvYoOIAXeS8lOMLzJ3skGOqUB8IqXJV3krg4hC8jcKiC%2FW8Z8%2Fu5MreTFEpltQyx%2FzTelrh8C%2BO365v0tqNrwcDH5cIFYbqFJxv6eaqC7fy3qs%2FbKzWhZs0uyjm5n5p0i7Q6HHVgSwG8vaFur7XGdMyHPd8qZeoq4ags2XvYqAEv8TImbo7dZ02717y43qhhZl8WcRlzoAlNnajf%2Bty8w1wVb551RBe2HaZBTva9MuHr%2FecS9dLIE&X-Amz-Signature=7f7b5c3578b967d44bf3fe098161c5ead6cd2b6ba4ee717f11de0cb22b7110a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPZF6WQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu4Bz392CF3fMyO54Lgoj4HnhWlitl84eG5SYQwYkP3AiEA4keVURFiZM4oIHE5%2F4vmimyOXBu8S1UFdFMPZAt%2BxZEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX617hFJp9VZldSWircAx6Dy6%2BNjeCzuLnSeNm9NRS7lYfor4as0CQd5du7AtawffH8rdT0by1Q8SN1hOQN%2F5ZyhXB1PCJGt1xBVpEEaOb60fCAk2i9rJ%2FkEKewqH1jmwkWHaY%2F8sMUBkU0sxJNRy0zXpe1EC%2Be3LYD0zWMp1YWXUPMunI1DGl5ZW4KqZ6xhA6NihaYeCnjJ1MpfLvRwdQpJNykNPv%2BqU4R1qQVwMG3MTM%2Bp%2BhO2dTjfMVaAiihNbwg4UdZ7dn29sIYvsngs3UIaw%2BB%2Bl%2BLooYWEfppt%2B3T6Thqqpbfh0%2BL98BWu7mbUGtEvRC1BMmbNCk9tXD%2F49Ir5TgOIAB76A6hOSKO93i7eAsfEywqXY7HwC2bKhjXhk7%2B8lj%2BhDLHcCqdqT4QoNyqwGVct4dQVdJ3i%2BoHORmqzWoOjnDTK3F9OZmKA25CqxzwrTKSf3EvjSqp9eAy5f0BfSVjTzScfrWWf%2BO53l9af8uYdd1jcrUlgbzk3KLNlGp6NSMEDPQt2Nro5wBc7XsP6hkbLVv8%2FeDv9RQuEMcVNtJztpQW142cqzEFVR8Yagi6OkzSBTiPmbjYG0huC8ijRjior5kgFRfv3Hg0GG0LvV6v9V2%2FsHeszxN5aAq0r9oWvYoOIAXeS8lOMLzJ3skGOqUB8IqXJV3krg4hC8jcKiC%2FW8Z8%2Fu5MreTFEpltQyx%2FzTelrh8C%2BO365v0tqNrwcDH5cIFYbqFJxv6eaqC7fy3qs%2FbKzWhZs0uyjm5n5p0i7Q6HHVgSwG8vaFur7XGdMyHPd8qZeoq4ags2XvYqAEv8TImbo7dZ02717y43qhhZl8WcRlzoAlNnajf%2Bty8w1wVb551RBe2HaZBTva9MuHr%2FecS9dLIE&X-Amz-Signature=6b4e34e6cfb3b0769bb1efd4f2244b27480eb1a280227b2b5913ba7d03097fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

