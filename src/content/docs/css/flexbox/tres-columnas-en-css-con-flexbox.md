---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKB4JB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8n%2BzvZkPTnCwVZqZUxl5Lhi3dajZqG6KnoYPqVGaHvAiEAuel0RZ9dN1TwBsPl5dMuVmI07E1uPSrgA7r2UNoccbUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDR%2BJCs9hG9F%2BvVgXircAzszwXHNpCNhnYafG8U7ufTFBSPclLJ8Ac8GEgKDgrU6xSEgEDm1euq%2F8J3n9zurhKHw1riwyp9T%2BLfJLo0oHqSCrIFccT1Xh4dpR6Ti7KgNwK3VkXHqMECgTu2ogCEjjRrbt6J6pI7ENFGvSpOi%2BY1PEETthZhg5lwnOJwOS5EAVGK562KiERMP9NiOmMnXcGqhyqTjWhqyL7csujiP2F%2FAlVUrAJcFqwgvJrd5%2BPbbaUnG0aUrfrtcdwDgvS5ueKtHyFwiHrHnVBNXXaQoNYj%2BDAkyw29xK2%2BisVFL5u8z8SQD9gozJ2Hi0HwEgCe38n4yAUOGFW%2FjWfdC6Gv23Uhx0HIE4fIthm37eEwbj6LvBIoooQX6tZvNb66qj202YwFl6Lx280dgP%2Bip3CuHwhv6gCg%2Bjm34DpEJvytjY9LLDdS5nxiyfRJBBy4IzpT%2F%2BsGvt%2F6I8SsZFO64oqVaZ3n7XW718OuHzUMVAs0huTZYa%2FKOWaR37YaEoivreTMcifaK9UP%2Bz%2BoVSZHxH0VZTWF6%2FISymk9UEdlyeeesBYlNLkzyLe7IUd2FySiBpULrzqt10i%2Bl6jQfErOdyQyisaAATqp7YwAGAymPwq6MGkQMDio%2FgtIjJIXjWnKLMLP2y8kGOqUBabbJIGEb8i%2FBYU3tG2BJELOl899cPeodyl2IWpfGcslFdmiJALfTC%2FKOuLZyGnDJSCuvm37g9FGuTEzazdSv2OvLAWzmZrMXPf8oyJBAlAp60hWq6LWU2HtThKa%2FucSxpYMx9XP8G8T74lehk1CtJbU0rcJiMpjQrJeypELjKYSKV%2FhD5q0AkkK3FQhAAVpIHMUTVbCn7bUYlXIS4JZyIXxq7ULf&X-Amz-Signature=0874101903af642647afe9dd3773a635093e326e726a296ef31d1f3d2b332637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKB4JB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8n%2BzvZkPTnCwVZqZUxl5Lhi3dajZqG6KnoYPqVGaHvAiEAuel0RZ9dN1TwBsPl5dMuVmI07E1uPSrgA7r2UNoccbUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDR%2BJCs9hG9F%2BvVgXircAzszwXHNpCNhnYafG8U7ufTFBSPclLJ8Ac8GEgKDgrU6xSEgEDm1euq%2F8J3n9zurhKHw1riwyp9T%2BLfJLo0oHqSCrIFccT1Xh4dpR6Ti7KgNwK3VkXHqMECgTu2ogCEjjRrbt6J6pI7ENFGvSpOi%2BY1PEETthZhg5lwnOJwOS5EAVGK562KiERMP9NiOmMnXcGqhyqTjWhqyL7csujiP2F%2FAlVUrAJcFqwgvJrd5%2BPbbaUnG0aUrfrtcdwDgvS5ueKtHyFwiHrHnVBNXXaQoNYj%2BDAkyw29xK2%2BisVFL5u8z8SQD9gozJ2Hi0HwEgCe38n4yAUOGFW%2FjWfdC6Gv23Uhx0HIE4fIthm37eEwbj6LvBIoooQX6tZvNb66qj202YwFl6Lx280dgP%2Bip3CuHwhv6gCg%2Bjm34DpEJvytjY9LLDdS5nxiyfRJBBy4IzpT%2F%2BsGvt%2F6I8SsZFO64oqVaZ3n7XW718OuHzUMVAs0huTZYa%2FKOWaR37YaEoivreTMcifaK9UP%2Bz%2BoVSZHxH0VZTWF6%2FISymk9UEdlyeeesBYlNLkzyLe7IUd2FySiBpULrzqt10i%2Bl6jQfErOdyQyisaAATqp7YwAGAymPwq6MGkQMDio%2FgtIjJIXjWnKLMLP2y8kGOqUBabbJIGEb8i%2FBYU3tG2BJELOl899cPeodyl2IWpfGcslFdmiJALfTC%2FKOuLZyGnDJSCuvm37g9FGuTEzazdSv2OvLAWzmZrMXPf8oyJBAlAp60hWq6LWU2HtThKa%2FucSxpYMx9XP8G8T74lehk1CtJbU0rcJiMpjQrJeypELjKYSKV%2FhD5q0AkkK3FQhAAVpIHMUTVbCn7bUYlXIS4JZyIXxq7ULf&X-Amz-Signature=712f6994bda0db73d8d8dca964459efd46e47a10a16bf58497c4b02ff5936fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

