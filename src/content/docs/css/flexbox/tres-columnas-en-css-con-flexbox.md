---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4WFPJU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFLwLWi1V%2FwgxgP1buzQGzzknUUELbJ5U298JF6yiEQKAiEAxpYFZ3nuxObmXjXFXUBeTvUD55LLE2djTNdbJi8orbQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKs9TIHzVosuIRR2rircAwZDEdlPJw%2B9R1IClJJHyTmFx5UMZkdlWPlVlZDyd0PXTT9GtwfoBt%2BRZ2RBJAf5bW3XIEKClQ7r6Mah7oWdtiX2yxt6sTaMQMl%2Bg%2B%2BG%2F4CdO99Uj3MLwhipo58kdppBI7y0i3Uf359%2FJJ9xngFVApJ1XJ%2FtHTTwWMNsrjs6Dd7F5j1ni304dXeINlkMpId8TxjKFEIPMsZ6H2uLeK38yFh%2BEAjb82hS4Ti2BKppcNcM0mP0voGlteksdqve8PTSlyQEDx8Oc%2B58UgMS7UoGFxvDiHyFOkgh7DQvwgU8Sbo0bdyCWNkYkWMGcK%2B2dZW3eJ6pOuoK%2F8ktE9aYQnUJgGZ8OPMGUEQ%2F%2FtM2rTDhS2W00LSfsaDEeqws%2F%2FqatFWeJ%2BdBYRcN0DbsnFXfzoiNvVR4izDE7A7dUA9zrk8t%2BmD%2BEnwkfY3pZVkOkNkIogsqcnOFa7zDggClNykSDF7xfxvl4Mgiqea1SEdxO28lh1zkDWAfYK2z1XtAclychdIMNyQSP%2Bt4WzMEWo03yO0rq7lc5US5RtAIlymArXeENhA%2BefhByYfJC1NJVD1xYHoM6bd4K2qxFaryB5ggP29vuqm3cvv0wWtNfGj4PSBoFBJRPON4iuGQNtzlo52PMJCGxckGOqUB7ZG4GboiwgLvqj4VUwRL4URjdX5leYfbTiBNBEuquiI2LETS5FT6Zb01VtNZqlcf417ZbYUlUdWJPEXi2sdRe%2F68tuYYmFm%2Bj5skORxsu%2FBAyTEAB18aBpRvZ1H63gi8GbYo4kyZxdHvMd7xDKM8JQCkPZJeqy0VHl1f0KrrOJGVkl9vi5x7l9AJBA0n9O7gL6ZZMRs1p1Z6h3L2dJDQe5HlVi%2BY&X-Amz-Signature=339fe69a65b5ff02098679fb918c5bca33160aae5d3e2e87cf45747caf75329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4WFPJU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFLwLWi1V%2FwgxgP1buzQGzzknUUELbJ5U298JF6yiEQKAiEAxpYFZ3nuxObmXjXFXUBeTvUD55LLE2djTNdbJi8orbQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKs9TIHzVosuIRR2rircAwZDEdlPJw%2B9R1IClJJHyTmFx5UMZkdlWPlVlZDyd0PXTT9GtwfoBt%2BRZ2RBJAf5bW3XIEKClQ7r6Mah7oWdtiX2yxt6sTaMQMl%2Bg%2B%2BG%2F4CdO99Uj3MLwhipo58kdppBI7y0i3Uf359%2FJJ9xngFVApJ1XJ%2FtHTTwWMNsrjs6Dd7F5j1ni304dXeINlkMpId8TxjKFEIPMsZ6H2uLeK38yFh%2BEAjb82hS4Ti2BKppcNcM0mP0voGlteksdqve8PTSlyQEDx8Oc%2B58UgMS7UoGFxvDiHyFOkgh7DQvwgU8Sbo0bdyCWNkYkWMGcK%2B2dZW3eJ6pOuoK%2F8ktE9aYQnUJgGZ8OPMGUEQ%2F%2FtM2rTDhS2W00LSfsaDEeqws%2F%2FqatFWeJ%2BdBYRcN0DbsnFXfzoiNvVR4izDE7A7dUA9zrk8t%2BmD%2BEnwkfY3pZVkOkNkIogsqcnOFa7zDggClNykSDF7xfxvl4Mgiqea1SEdxO28lh1zkDWAfYK2z1XtAclychdIMNyQSP%2Bt4WzMEWo03yO0rq7lc5US5RtAIlymArXeENhA%2BefhByYfJC1NJVD1xYHoM6bd4K2qxFaryB5ggP29vuqm3cvv0wWtNfGj4PSBoFBJRPON4iuGQNtzlo52PMJCGxckGOqUB7ZG4GboiwgLvqj4VUwRL4URjdX5leYfbTiBNBEuquiI2LETS5FT6Zb01VtNZqlcf417ZbYUlUdWJPEXi2sdRe%2F68tuYYmFm%2Bj5skORxsu%2FBAyTEAB18aBpRvZ1H63gi8GbYo4kyZxdHvMd7xDKM8JQCkPZJeqy0VHl1f0KrrOJGVkl9vi5x7l9AJBA0n9O7gL6ZZMRs1p1Z6h3L2dJDQe5HlVi%2BY&X-Amz-Signature=aecc99e6b6b34bb90bd45ef1951e686744c8acf6e5b8e3dbc0566b5381a06fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

