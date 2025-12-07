---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHULLKN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT5NPF0SvR4lfIPO3hlH7VmX78Bo4Dkl9wsVGJI7UADAiBqyzp7gCOXRSV7j5bRafGviBEoxx5dP33F8ANYUxAo%2BSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWFRhFW36dHbHYD0KtwDFyLz6IsbfG8wuomaKShKlqLfO%2FtZmsN6PHGUxQT0Ql7yHTRODARl7ZzuYB39MOmkV7oWlTTY5mUBmG4HvHpFsL9g2Qc27gcfQ3%2F8Can74nz0KGVuy6ipUc9QO3zO5qFTUiezVhjNf4qb%2BNxQyyZjpwMsr7bueG123FqV1z415W88FXlZi6c%2FCJ%2BbimEpjpRiTISmU5GWKaAlL18KHXrAMaCuW4CkI%2BNRYUv%2B4TGtqsLfbSn6NiZd%2F%2By%2F%2Fy5wmBrIrE3B9h%2BeOYVCv5juL7hF7Gsz3vZBJ5XtP7iM%2BVLWy2mbsm%2BG9cT034wCUEwp3Fp2y83pFiPJ3m%2BBIADUIzN3s5h4s8160NzTPPRNI5GV3MCUCiWlif5Tai1fNnJJpAZfAN8n4VXA1kApbEoOAz8R2jaUaKpX3jNI5fgIrI%2BjXwiqc009lM%2BS3G6m%2FrMZ98pDDDkTmZXyYuH0xqnRM2VCLLxNi49gKilJZKfg0g4vCrSnuAXHBQ87%2BBY5jbbAH2CF6JFqExQjOvLF7LXubnQVsWcnlJMIVGSTznMZFuZJYIXGfam2N7JtUa8XvvuFRMCyGQGOvChFa2SSkGoB%2B2GtMKJ5SeAPwvs2cgf%2FQPVszzZC5KnIWNTeIP0CviEw%2F8fXyQY6pgHjOXVfnk7uWvHWSKfwTQkOxVUOqyVj5lIK0GfQciM5fePc2FgEh44CF9m8RqfnyyeZuiT2haFqDmuVfQF2XuUuKqZYkRufPLjbE6Di7wFJxK0VPxH1LCUfEyWbAZlgcsovF%2B4nJiaO9ilRLTRH7qk6Eaw8NK87o2J1d0akbZQNHa5Fs4X2CEH%2FxaddodUEOqn2cT1%2FBzFN%2Bz8nzAq9mLaNHcgLdf7N&X-Amz-Signature=f5b8d090c11ad01f02afd6f588840e235e23775cc9d0d7a4fb6c2f5e6c5e96cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHULLKN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT5NPF0SvR4lfIPO3hlH7VmX78Bo4Dkl9wsVGJI7UADAiBqyzp7gCOXRSV7j5bRafGviBEoxx5dP33F8ANYUxAo%2BSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWFRhFW36dHbHYD0KtwDFyLz6IsbfG8wuomaKShKlqLfO%2FtZmsN6PHGUxQT0Ql7yHTRODARl7ZzuYB39MOmkV7oWlTTY5mUBmG4HvHpFsL9g2Qc27gcfQ3%2F8Can74nz0KGVuy6ipUc9QO3zO5qFTUiezVhjNf4qb%2BNxQyyZjpwMsr7bueG123FqV1z415W88FXlZi6c%2FCJ%2BbimEpjpRiTISmU5GWKaAlL18KHXrAMaCuW4CkI%2BNRYUv%2B4TGtqsLfbSn6NiZd%2F%2By%2F%2Fy5wmBrIrE3B9h%2BeOYVCv5juL7hF7Gsz3vZBJ5XtP7iM%2BVLWy2mbsm%2BG9cT034wCUEwp3Fp2y83pFiPJ3m%2BBIADUIzN3s5h4s8160NzTPPRNI5GV3MCUCiWlif5Tai1fNnJJpAZfAN8n4VXA1kApbEoOAz8R2jaUaKpX3jNI5fgIrI%2BjXwiqc009lM%2BS3G6m%2FrMZ98pDDDkTmZXyYuH0xqnRM2VCLLxNi49gKilJZKfg0g4vCrSnuAXHBQ87%2BBY5jbbAH2CF6JFqExQjOvLF7LXubnQVsWcnlJMIVGSTznMZFuZJYIXGfam2N7JtUa8XvvuFRMCyGQGOvChFa2SSkGoB%2B2GtMKJ5SeAPwvs2cgf%2FQPVszzZC5KnIWNTeIP0CviEw%2F8fXyQY6pgHjOXVfnk7uWvHWSKfwTQkOxVUOqyVj5lIK0GfQciM5fePc2FgEh44CF9m8RqfnyyeZuiT2haFqDmuVfQF2XuUuKqZYkRufPLjbE6Di7wFJxK0VPxH1LCUfEyWbAZlgcsovF%2B4nJiaO9ilRLTRH7qk6Eaw8NK87o2J1d0akbZQNHa5Fs4X2CEH%2FxaddodUEOqn2cT1%2FBzFN%2Bz8nzAq9mLaNHcgLdf7N&X-Amz-Signature=9d34d0fe17692e844df1955351bb4b50b3716341da09a5af47a94ab8cff06dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

