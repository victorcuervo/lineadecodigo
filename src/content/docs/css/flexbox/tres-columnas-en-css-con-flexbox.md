---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JK6FQLJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyT8MVUShHqx7VecBewhMHkrntCYfv0qvod2cERT9%2BLAiEAvxDcopb6yXwRYGDsf7B0xNsad5LDUMKEVbFV6SioH9wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAdNZTrVGJeQNilfSrcAwu58oUVb%2BaZOGMSs0vgkA31PcjZiKcf%2FW8FqB3AvVYbzHZ4Pap1e92asoJSyLXTrBY%2FMsUuR3LnT0SdIbbMHvS%2BNvhSZeKqJL6mnce2jUHjn%2Bg8uCwroF8Fgghgemw9i8yf2R%2FlV9dukG74wje0LA0HFzFBjgu8AxHIE0mzUNiOayzllJFJRNOv1P0HFy%2FFlkpExFGilSnt%2BVU3DlzQgxfecfBswUhflYHfKJMNL8068yXKZvkk%2BOil%2BvNv2U%2B6mps7FPv3Y4qQfddqX%2BR91iuRMsd%2BNXad55Vu3krVbvbGrZEnT37oK3woPrtqKm9QY3pPlPvMjXftu1V9VRD4y%2FMs23Z67RNjb18oThP4kn4sL4fgZyrYTr7tSTWJSX2Z25dyj%2BbmDvKt5BPswq2UQS5A%2BNdUSzF4rQvb4MxqIYfqnzEVqNcHCiKYXEW6EA7hn3yJBMn4AXKCTGwGhgr05wGzeoL1UBxbMIGonub8cN4Mqh%2BDgKKb8yyR66n%2Fs0FbhpFYtE6Flojf5oNMf45YcY06mFkqn8IcxT5%2BuVxc40gRekEzSNCyEFPsyMgA2bz0M4L8gvhzQm8UfShixQFg1KpvuyhFEjPhTyqIqCa%2B1dOXAF8wNbFem%2BD1dNAtMKDv2MkGOqUB1Z5Scmqw770yNFaSSqzv0HeNSTrSVwl5SiqHYWjtDW%2Bn%2BqHF1M6652w4nSsuw7ssusylC1huZtzdjAIuA9%2F5GRISSBlPzhaiSTD1lrqF2r4LCxLIm0sgDsLMe%2FzBqzfyQniYux%2FgJiaFzWis2GU03xkYEcu3SC0s5%2FtMFtAvEeZj5hnYJtwW7YefHB%2BFyqDvW81B%2FFNeQ%2Bl55qqfhv%2FQqrj7IN8Y&X-Amz-Signature=d1cd14700277ad6f955bf82bcf0f6bfb718fc390a5d67256f0b7c8afe28c74be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JK6FQLJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyT8MVUShHqx7VecBewhMHkrntCYfv0qvod2cERT9%2BLAiEAvxDcopb6yXwRYGDsf7B0xNsad5LDUMKEVbFV6SioH9wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAdNZTrVGJeQNilfSrcAwu58oUVb%2BaZOGMSs0vgkA31PcjZiKcf%2FW8FqB3AvVYbzHZ4Pap1e92asoJSyLXTrBY%2FMsUuR3LnT0SdIbbMHvS%2BNvhSZeKqJL6mnce2jUHjn%2Bg8uCwroF8Fgghgemw9i8yf2R%2FlV9dukG74wje0LA0HFzFBjgu8AxHIE0mzUNiOayzllJFJRNOv1P0HFy%2FFlkpExFGilSnt%2BVU3DlzQgxfecfBswUhflYHfKJMNL8068yXKZvkk%2BOil%2BvNv2U%2B6mps7FPv3Y4qQfddqX%2BR91iuRMsd%2BNXad55Vu3krVbvbGrZEnT37oK3woPrtqKm9QY3pPlPvMjXftu1V9VRD4y%2FMs23Z67RNjb18oThP4kn4sL4fgZyrYTr7tSTWJSX2Z25dyj%2BbmDvKt5BPswq2UQS5A%2BNdUSzF4rQvb4MxqIYfqnzEVqNcHCiKYXEW6EA7hn3yJBMn4AXKCTGwGhgr05wGzeoL1UBxbMIGonub8cN4Mqh%2BDgKKb8yyR66n%2Fs0FbhpFYtE6Flojf5oNMf45YcY06mFkqn8IcxT5%2BuVxc40gRekEzSNCyEFPsyMgA2bz0M4L8gvhzQm8UfShixQFg1KpvuyhFEjPhTyqIqCa%2B1dOXAF8wNbFem%2BD1dNAtMKDv2MkGOqUB1Z5Scmqw770yNFaSSqzv0HeNSTrSVwl5SiqHYWjtDW%2Bn%2BqHF1M6652w4nSsuw7ssusylC1huZtzdjAIuA9%2F5GRISSBlPzhaiSTD1lrqF2r4LCxLIm0sgDsLMe%2FzBqzfyQniYux%2FgJiaFzWis2GU03xkYEcu3SC0s5%2FtMFtAvEeZj5hnYJtwW7YefHB%2BFyqDvW81B%2FFNeQ%2Bl55qqfhv%2FQqrj7IN8Y&X-Amz-Signature=ed59d494db45cd4226043fd7902048cacb735144c99620ee7706912d9880f337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

