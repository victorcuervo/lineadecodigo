---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6MBPFP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpit5C1%2BZ8uJUT5qAUrXAZSjdSR2LreRtFFOM3C74USAIhANtFhIWhFcfGCIC9ZfGZZgF7k02JbqtJfi8tEa%2F2kycjKv8DCEQQABoMNjM3NDIzMTgzODA1IgxfyriJX92jprGRiBYq3AO%2F%2F5w37k4GkKkOlXI9MjWcrZSnyvny3JUHmLgDF%2BVfTH3q2Cl7M4vX%2BP6ruxBBOBAwQcEIhH4srjgwNO0XyE7iFJpMPvmoWFRYnM6zyWrnbpnfDr2zsMbpe9NVZDuZSL7N1oIyoghelNpsL4UZV%2BVKBQL2XsJ0e9gfieTjAQe8BWM6P69IfkbefBPIUJIL6rAr6VMwW0PRYoqzpbpToQYlq3olSdSNWnweLB1gh91U4goQmecq2sS%2B2YFlboikwWPTsSA6VQvk1zKowoLHFT9MCe53YJWwAm7nHle1G%2FtQENz374S23vzbsllKlgwHfQfbOjP%2Bjkr7mS06u4tQS5OsY1hM4NrtwD7l7yBWiSYPvCcQd15ev5z5ZgZGllrlgjLFmSRkJZsmaZPAmT%2BxxhHDkZ%2Bj%2F66ssNV%2FOtIM96YnDx1dWLoXd43w5qccjbaRZajPQ%2FdxSHIqyw9aX1VOi9z29OTKgetmd1Gk1eIPQcJdpaMvX3UQoqPb4nMAA0MI6CWgY9gObA4dwm51MJJkkgce24BL7eRljzT16UIHDefD%2FhQN998iX1C6ffUAvLCqHGcgHpU%2FkTVmuTWA09cr42eHjFkmGD747LwrskhNaujU%2FPsf2IaQ8voPtvfJMzCzysXJBjqkARPkZKQxlsOrptqbZ8JIFMXXyfXc3VoeW2w8SygpMvJoslczYLFtyj2rkWsxu5dgytCS%2Bxz%2BEyuhgRXoIjay44XpSayALHFOJtPBLKi3ihS3KCTOwPxssaBOKoGLSviRYTDbyfGGqWvLbNpzgIjnDxOncCUYD6KSiG8eKby3wCwLCBWQusyg85z0gg8Pb366Ae31zUnn281Aw51lUSwNLeldOZHu&X-Amz-Signature=2e819af5eba0323201bf25e7bd10177f5545afa4625f994faf5f3f01f316786f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6MBPFP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpit5C1%2BZ8uJUT5qAUrXAZSjdSR2LreRtFFOM3C74USAIhANtFhIWhFcfGCIC9ZfGZZgF7k02JbqtJfi8tEa%2F2kycjKv8DCEQQABoMNjM3NDIzMTgzODA1IgxfyriJX92jprGRiBYq3AO%2F%2F5w37k4GkKkOlXI9MjWcrZSnyvny3JUHmLgDF%2BVfTH3q2Cl7M4vX%2BP6ruxBBOBAwQcEIhH4srjgwNO0XyE7iFJpMPvmoWFRYnM6zyWrnbpnfDr2zsMbpe9NVZDuZSL7N1oIyoghelNpsL4UZV%2BVKBQL2XsJ0e9gfieTjAQe8BWM6P69IfkbefBPIUJIL6rAr6VMwW0PRYoqzpbpToQYlq3olSdSNWnweLB1gh91U4goQmecq2sS%2B2YFlboikwWPTsSA6VQvk1zKowoLHFT9MCe53YJWwAm7nHle1G%2FtQENz374S23vzbsllKlgwHfQfbOjP%2Bjkr7mS06u4tQS5OsY1hM4NrtwD7l7yBWiSYPvCcQd15ev5z5ZgZGllrlgjLFmSRkJZsmaZPAmT%2BxxhHDkZ%2Bj%2F66ssNV%2FOtIM96YnDx1dWLoXd43w5qccjbaRZajPQ%2FdxSHIqyw9aX1VOi9z29OTKgetmd1Gk1eIPQcJdpaMvX3UQoqPb4nMAA0MI6CWgY9gObA4dwm51MJJkkgce24BL7eRljzT16UIHDefD%2FhQN998iX1C6ffUAvLCqHGcgHpU%2FkTVmuTWA09cr42eHjFkmGD747LwrskhNaujU%2FPsf2IaQ8voPtvfJMzCzysXJBjqkARPkZKQxlsOrptqbZ8JIFMXXyfXc3VoeW2w8SygpMvJoslczYLFtyj2rkWsxu5dgytCS%2Bxz%2BEyuhgRXoIjay44XpSayALHFOJtPBLKi3ihS3KCTOwPxssaBOKoGLSviRYTDbyfGGqWvLbNpzgIjnDxOncCUYD6KSiG8eKby3wCwLCBWQusyg85z0gg8Pb366Ae31zUnn281Aw51lUSwNLeldOZHu&X-Amz-Signature=5225163719b37ea2204e50f3fa6d8b463995701be80d3720e30617e0075260a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

