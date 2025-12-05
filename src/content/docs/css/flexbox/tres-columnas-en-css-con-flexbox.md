---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB6MY5K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjyp7Ue0nvbhf%2FARVdU3mEM8eadvE6HPDgbPOJZH81HAiAKHaZcf4JHbiWu5jtbT4jF5k5DijKrfkL%2BYLbSZQjhyyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSls8pHZuPDmpIGjzKtwDGd9DMy1gedGv5npC1qUkuvfEczjkC14qBYCoZWNM7rZSynF9vpFCoOd0LQGXhfl8awsFPxSlSBayCq9jvmchPjK4u6bYz%2BEK2EW4AsHrWrXrMAXUn7BZ9ylhQwvWC6Tx5ix3jARQwKOr%2BTocZOUMWXs0LubEk6QK5I%2FotHO1k5rfDUrOYudEZjBSXqjBrG7RpkM3zIvUZSSrcp5x9GH42XMvJl0JSjKUZpMNn3VWTzSm%2BVsWAYqpRTn9UDC2lWCM6kb3T2KwFyU%2FPhJwVbLal%2Fyma4jYvXK9yTEEnxdx2qMqAUPRqEE7gHEEC6MObtYeTH%2BEA%2B3K1xabzAUGIeoDNWudaS2gFQdmXhGATNUpwJSAuA9EnJEWJoY%2Fp6qCWzpOP%2F%2B7raS7VCwJO3buwZjoRdawfsWiw%2BgcFFblEJeMxQ40nqR%2B1qZAPsTATCIulM4bFOd0XLCiLcLHFxtL2w87X6WESZ716GhVb7JVB4xGAqh8vp7vdLskJpBq9lZbVS5sV5qruH1nqjdYgCrOQGaBwfkdzYLy3EwMUOSpBFmCjYZQgZTn1UJEhkDpcGSe2PO2HgPT%2BUIsPD0JKkOuoHbaxJU6FJERU4Eg29lNYW6oWC7ltLYubIvMGliCvIkw%2FcXNyQY6pgFSFA0hwpwGTUR8AFGBUXlRkilbo%2BKr4tZSilqPZHBrqrNzm1kHWTKIsk85S2G67CEMLdGsAcXLXfsThH%2FgdiswJyaRBMXrly981jD%2F%2BkOAThujy196rAVo%2B5HhYYuW0p4xToPGS%2Ft85C8Hw8kDuwyk1HQOLFKe1jrJo3Qrtirr2cHcCDWzULO8BOvsSKQbwFajzb53u35QNvkLBXDmZpdmkS2ri2he&X-Amz-Signature=afce4c041c15be49bd6db449b1e25c52fcdf7cf5e64979b684be618f84d2a5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB6MY5K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjyp7Ue0nvbhf%2FARVdU3mEM8eadvE6HPDgbPOJZH81HAiAKHaZcf4JHbiWu5jtbT4jF5k5DijKrfkL%2BYLbSZQjhyyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSls8pHZuPDmpIGjzKtwDGd9DMy1gedGv5npC1qUkuvfEczjkC14qBYCoZWNM7rZSynF9vpFCoOd0LQGXhfl8awsFPxSlSBayCq9jvmchPjK4u6bYz%2BEK2EW4AsHrWrXrMAXUn7BZ9ylhQwvWC6Tx5ix3jARQwKOr%2BTocZOUMWXs0LubEk6QK5I%2FotHO1k5rfDUrOYudEZjBSXqjBrG7RpkM3zIvUZSSrcp5x9GH42XMvJl0JSjKUZpMNn3VWTzSm%2BVsWAYqpRTn9UDC2lWCM6kb3T2KwFyU%2FPhJwVbLal%2Fyma4jYvXK9yTEEnxdx2qMqAUPRqEE7gHEEC6MObtYeTH%2BEA%2B3K1xabzAUGIeoDNWudaS2gFQdmXhGATNUpwJSAuA9EnJEWJoY%2Fp6qCWzpOP%2F%2B7raS7VCwJO3buwZjoRdawfsWiw%2BgcFFblEJeMxQ40nqR%2B1qZAPsTATCIulM4bFOd0XLCiLcLHFxtL2w87X6WESZ716GhVb7JVB4xGAqh8vp7vdLskJpBq9lZbVS5sV5qruH1nqjdYgCrOQGaBwfkdzYLy3EwMUOSpBFmCjYZQgZTn1UJEhkDpcGSe2PO2HgPT%2BUIsPD0JKkOuoHbaxJU6FJERU4Eg29lNYW6oWC7ltLYubIvMGliCvIkw%2FcXNyQY6pgFSFA0hwpwGTUR8AFGBUXlRkilbo%2BKr4tZSilqPZHBrqrNzm1kHWTKIsk85S2G67CEMLdGsAcXLXfsThH%2FgdiswJyaRBMXrly981jD%2F%2BkOAThujy196rAVo%2B5HhYYuW0p4xToPGS%2Ft85C8Hw8kDuwyk1HQOLFKe1jrJo3Qrtirr2cHcCDWzULO8BOvsSKQbwFajzb53u35QNvkLBXDmZpdmkS2ri2he&X-Amz-Signature=ba5fd864eb0506d4d505cd47ffb147f378b5c8bb715242837be0db2c06815e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

