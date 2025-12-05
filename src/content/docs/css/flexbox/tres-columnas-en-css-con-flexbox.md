---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UESD6EZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FSqyZKBQkxgE7ngXomA1E0pCFux%2Fr%2FPt239CSurHDyAiEAj4Y4UPknY%2BLs8ecoBMOgQjAk9YOLSby80QEzP80Lv0Qq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF0O9iGMCNOHA0ZS9yrcA2ViNDL0IUfQcY3%2BuSsyNGeP%2FyYvkkU7tQZjCW774qdVyC%2BS94Gko9nnSgkaqxynk1D7TTgBWxjCiyaFph8OjzFQrAuo2YFsG%2F%2F2YgnnwZ%2Baiu39h7lAvO0oFvTFBWH%2FcWNsWm4OKRXLuNqUWNoh9alNKKiMb6DMjKHe49b1gf%2F5JbEG8DZdmBGR1aEjLfP8mR3MsiZAS7gc1Mv2lY01c5Xwxlv1f7LJXAbB1vtxpHGoMuag%2FWcUkh%2BO3hAdcblbKweouKL8FCUTL%2F4VyzGIyQdeuJwzSwVbsiJovAGEse%2BJnGRq9MbSxZjUqTMoW%2BPwukpYG%2BVSDuRH44AkApjfVAX5dg%2FESgU5gmFNola1f72taj3FEUfaF2SnhAB3J7zWV9gRh54vN3k5wiB%2BADWaeV0uTi%2FtI%2FDOq5PVWxlLWL1FjKo47c477u20BFHTx4q1FGymXdj0R1IclWRzaehTSDiEqgW0BTc9AxZX%2Fo5Z4r6O9iobQRkZayXijkr87B0JMySFepHXdP9jK0YfMo%2F4d0uAqeh7NVtYHZTrx5NxlUzesQAXIwZhJMmsSskH9lPbnWu2aSQlH7v0eraaJmsZdiwkXY%2FnYMjxfkLZ%2BIK%2FESh4ap3DFuErIrpGqT%2FOMOSyyckGOqUB1wU5Ic1g97%2BHIlsSWM2%2F8JBMNUE0C5VDUymW2%2FvszAXlxm6Fif2ZN3DT%2FPgwY2FlNvRwMRgvNozgGxm3m1kcY3yxLeSgoS1IKR1vB3ndKdPRrVyAjV1gRYe2DRgbiAbYLrE4RRAZ%2BBXaj8thZViQ%2BtviG3OlxFonrE2Ixa%2BvoNXO%2BbRbojvGFPXd2bjmOuiACHK8n62URECCUC9XW8aYsIyI96Hg&X-Amz-Signature=9332d2c8dce89ac7d3da98e9356a2e1d8f4b28aacc8eb659fd4f6d6f473fc32e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UESD6EZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FSqyZKBQkxgE7ngXomA1E0pCFux%2Fr%2FPt239CSurHDyAiEAj4Y4UPknY%2BLs8ecoBMOgQjAk9YOLSby80QEzP80Lv0Qq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF0O9iGMCNOHA0ZS9yrcA2ViNDL0IUfQcY3%2BuSsyNGeP%2FyYvkkU7tQZjCW774qdVyC%2BS94Gko9nnSgkaqxynk1D7TTgBWxjCiyaFph8OjzFQrAuo2YFsG%2F%2F2YgnnwZ%2Baiu39h7lAvO0oFvTFBWH%2FcWNsWm4OKRXLuNqUWNoh9alNKKiMb6DMjKHe49b1gf%2F5JbEG8DZdmBGR1aEjLfP8mR3MsiZAS7gc1Mv2lY01c5Xwxlv1f7LJXAbB1vtxpHGoMuag%2FWcUkh%2BO3hAdcblbKweouKL8FCUTL%2F4VyzGIyQdeuJwzSwVbsiJovAGEse%2BJnGRq9MbSxZjUqTMoW%2BPwukpYG%2BVSDuRH44AkApjfVAX5dg%2FESgU5gmFNola1f72taj3FEUfaF2SnhAB3J7zWV9gRh54vN3k5wiB%2BADWaeV0uTi%2FtI%2FDOq5PVWxlLWL1FjKo47c477u20BFHTx4q1FGymXdj0R1IclWRzaehTSDiEqgW0BTc9AxZX%2Fo5Z4r6O9iobQRkZayXijkr87B0JMySFepHXdP9jK0YfMo%2F4d0uAqeh7NVtYHZTrx5NxlUzesQAXIwZhJMmsSskH9lPbnWu2aSQlH7v0eraaJmsZdiwkXY%2FnYMjxfkLZ%2BIK%2FESh4ap3DFuErIrpGqT%2FOMOSyyckGOqUB1wU5Ic1g97%2BHIlsSWM2%2F8JBMNUE0C5VDUymW2%2FvszAXlxm6Fif2ZN3DT%2FPgwY2FlNvRwMRgvNozgGxm3m1kcY3yxLeSgoS1IKR1vB3ndKdPRrVyAjV1gRYe2DRgbiAbYLrE4RRAZ%2BBXaj8thZViQ%2BtviG3OlxFonrE2Ixa%2BvoNXO%2BbRbojvGFPXd2bjmOuiACHK8n62URECCUC9XW8aYsIyI96Hg&X-Amz-Signature=de799c814a54f27546f00a30e16d6151f1b49a238d50c6c3915d54c7308977ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

