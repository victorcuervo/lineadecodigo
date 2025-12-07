---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6I6CINI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpIebej9UTA6HMpl%2FhIh8DTwy5Ke9oawCu%2FDgNzxPVAQIgf8Z8KzU6zxOraG1BC9RxM8oWA3t9%2FNrQQoNscmfeHHsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIth%2Byojyt34kAPSvyrcA3Ip5OPA507pvW180%2BREDv9KxD3gdwoutG%2FHmtq4nDXal%2FVpCUEdD9ejTtDrOfT6d5SGC%2FWibavWgJMwlfQu2KFBBYfrQBlOaiy4lYljSeUVXQDh6wCNjZtAvVPGSL4czQXkAA%2Fr3Q0RvZ4LvFSz6gwLzs1yePuYUr0IAEjtzU2kRJg6rHL0WBvsy9rjjuGFVu3Hqmh1Z82Q2ZsPfHP9jGJpjFwuIIrNfYYYlrYWnvtqB4MWgnIYLt5U98l9bGQxKFJ3Wj5UsXJFiA7ilCvA0%2B99UJbVi5Jb8OpoguTmeCAdpZ2rKtqRpzaOJIeL5326Fxa0ZTb9yjaW5yGt7MiasWbJPoTN7GnmchHH2yzfDLzLgmBNysR%2Bs2qFu7gnLAx6JcheOCMPlRafacVqwNkDaWMz%2Btw7LdEu7yf%2Bh7nPGxDhP48TUd8sdnUvpLr44gcM2Rf7Qj2fkTO7qiZV93F0pJF5f2hT3fBy9I2UcdllPF0j4NLkMUlIIy2KjTbMIyZKcBY1AtrmyRneg%2B3Onb%2BRTmOF4q7WIexwHD471jQBqRPA8ueoIz64Yu4Wc0SyTZKSwyzd6FuAVyeAm4uCu%2Fs%2BXPu4D3bvcPilFvh0GK6rZsUgLAnbPovzyr2JaCAtML%2BZ1ckGOqUBzrdSbve9Mr%2BFfKqZi3SaghQon3yMDS5Lmx6MpwzG5p%2B4qTS%2FGOG8H54fo7K1jMYJJqzOL1ysC44pP1TM9pe55Q3lagtyHzmNBzT7L3%2FOQ7JCjvIBA8o0j83YzdSF52OsoGWKFtB5uVECDjI5Ep5wjVLKq97uFvaKcCG3LZ%2FcHqSwAXjrxUtVF6Urb9%2BxaotwCNL63LEXOt0ZzNGB%2FL0HNMxFW5fh&X-Amz-Signature=c502001f75c80112a1d6ae88c2f1fd4b3d21c6fde0b07f20d944074c3f9d74ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6I6CINI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpIebej9UTA6HMpl%2FhIh8DTwy5Ke9oawCu%2FDgNzxPVAQIgf8Z8KzU6zxOraG1BC9RxM8oWA3t9%2FNrQQoNscmfeHHsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIth%2Byojyt34kAPSvyrcA3Ip5OPA507pvW180%2BREDv9KxD3gdwoutG%2FHmtq4nDXal%2FVpCUEdD9ejTtDrOfT6d5SGC%2FWibavWgJMwlfQu2KFBBYfrQBlOaiy4lYljSeUVXQDh6wCNjZtAvVPGSL4czQXkAA%2Fr3Q0RvZ4LvFSz6gwLzs1yePuYUr0IAEjtzU2kRJg6rHL0WBvsy9rjjuGFVu3Hqmh1Z82Q2ZsPfHP9jGJpjFwuIIrNfYYYlrYWnvtqB4MWgnIYLt5U98l9bGQxKFJ3Wj5UsXJFiA7ilCvA0%2B99UJbVi5Jb8OpoguTmeCAdpZ2rKtqRpzaOJIeL5326Fxa0ZTb9yjaW5yGt7MiasWbJPoTN7GnmchHH2yzfDLzLgmBNysR%2Bs2qFu7gnLAx6JcheOCMPlRafacVqwNkDaWMz%2Btw7LdEu7yf%2Bh7nPGxDhP48TUd8sdnUvpLr44gcM2Rf7Qj2fkTO7qiZV93F0pJF5f2hT3fBy9I2UcdllPF0j4NLkMUlIIy2KjTbMIyZKcBY1AtrmyRneg%2B3Onb%2BRTmOF4q7WIexwHD471jQBqRPA8ueoIz64Yu4Wc0SyTZKSwyzd6FuAVyeAm4uCu%2Fs%2BXPu4D3bvcPilFvh0GK6rZsUgLAnbPovzyr2JaCAtML%2BZ1ckGOqUBzrdSbve9Mr%2BFfKqZi3SaghQon3yMDS5Lmx6MpwzG5p%2B4qTS%2FGOG8H54fo7K1jMYJJqzOL1ysC44pP1TM9pe55Q3lagtyHzmNBzT7L3%2FOQ7JCjvIBA8o0j83YzdSF52OsoGWKFtB5uVECDjI5Ep5wjVLKq97uFvaKcCG3LZ%2FcHqSwAXjrxUtVF6Urb9%2BxaotwCNL63LEXOt0ZzNGB%2FL0HNMxFW5fh&X-Amz-Signature=0fa1ae19baba84e0e292e29661e01e5f0a878b89580a8567c8c9e257229c75b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

