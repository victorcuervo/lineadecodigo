---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCWD2RL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5PIkAKqGdpzinOzPwabROxsmD5%2FNBlY8Bjukjez0ULQIhAMSAr8OpYyru97No4dYQGrHccbq%2FvktsxWBSb18FC%2FhzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6tCMHyrOKgEY2Zpkq3AMJ%2BAvb%2BcQC3YWPIAkRsc9aFcH2Dk0p4hBxpuc87yGBDXEPuHNVgw9Ib3DBVxygklWNNixWMG43O%2B%2F67PQ59aUzF4U8n45X8mmnOntdyY91bkCj34%2Fa9RrwpJVO81pooKLCM%2F3SUPb1lJo%2B29gPSw7AVKxZBVJkFdHXSDCC3Lq4QFZBUAM7n8ZVT4qU1%2BumaQsZCN32IopjkARHOvmCTThqBlcLic6Pu7uSOcjLYdbd%2BenNlXBgKrhLXdf6%2FkCYZbmvgRibqHRT8iSwIEwXmMrb%2B1vjqEPUN5p1fhoFyn65yD1yan9S4Fo7a3gB7H2rBC7LQZZ3EuS8jZ6fSBDBC7Y%2Bbw6n%2Bzw04n4PpHyny4df9HljOzyPpyYx35WB%2Fcz3e%2FLvniK8QeKE0Np6zgg0O4a46FQ7zu80m9%2BklY0AXvFIZpxx38t9D1TcZUQ7fC1Ci1ayy%2BxE3lNuRv7bBPy8GxvjfMV1VldrIApE5oWnmxCWWxCfynMpxjIH5S2CcAN5U1UJxYYugkDIAQQRPL8XAcmBcv6QHQ9ymh7TtYAyk4UEOstNNB%2FgUJD21Od9LOjxKhmr7ppD%2FET1jMK45TqfNm5Oxwzc4vWxGWiPJxB4jcNaEXuQiLNOcSwwXk9M0DDJ0djJBjqkAeEWFCA0BWSwotZ8K7LDXsWkhbv44nhnC4WTxmFCLqtUU%2BmszuDLp5DD59%2FoFzQd8uo6DCt9a2a%2Fy1JAX8Op4pZtu%2F2ll1qLkcA1D%2F16ooN8XrUiRutPPGnPW7KZwMuumclvUL4phCOPjCCvqRunKnzwWvef%2FZHTc0x7kjnPCDIyPzc%2FvFquzV8BKEaOxGvWUBnhuqOBg4TTuC%2FHL9o2PH74jZVe&X-Amz-Signature=42a9d6038bf4781e73def35ee135b86c4e2494021eed8306624aa9072cea2e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCWD2RL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5PIkAKqGdpzinOzPwabROxsmD5%2FNBlY8Bjukjez0ULQIhAMSAr8OpYyru97No4dYQGrHccbq%2FvktsxWBSb18FC%2FhzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6tCMHyrOKgEY2Zpkq3AMJ%2BAvb%2BcQC3YWPIAkRsc9aFcH2Dk0p4hBxpuc87yGBDXEPuHNVgw9Ib3DBVxygklWNNixWMG43O%2B%2F67PQ59aUzF4U8n45X8mmnOntdyY91bkCj34%2Fa9RrwpJVO81pooKLCM%2F3SUPb1lJo%2B29gPSw7AVKxZBVJkFdHXSDCC3Lq4QFZBUAM7n8ZVT4qU1%2BumaQsZCN32IopjkARHOvmCTThqBlcLic6Pu7uSOcjLYdbd%2BenNlXBgKrhLXdf6%2FkCYZbmvgRibqHRT8iSwIEwXmMrb%2B1vjqEPUN5p1fhoFyn65yD1yan9S4Fo7a3gB7H2rBC7LQZZ3EuS8jZ6fSBDBC7Y%2Bbw6n%2Bzw04n4PpHyny4df9HljOzyPpyYx35WB%2Fcz3e%2FLvniK8QeKE0Np6zgg0O4a46FQ7zu80m9%2BklY0AXvFIZpxx38t9D1TcZUQ7fC1Ci1ayy%2BxE3lNuRv7bBPy8GxvjfMV1VldrIApE5oWnmxCWWxCfynMpxjIH5S2CcAN5U1UJxYYugkDIAQQRPL8XAcmBcv6QHQ9ymh7TtYAyk4UEOstNNB%2FgUJD21Od9LOjxKhmr7ppD%2FET1jMK45TqfNm5Oxwzc4vWxGWiPJxB4jcNaEXuQiLNOcSwwXk9M0DDJ0djJBjqkAeEWFCA0BWSwotZ8K7LDXsWkhbv44nhnC4WTxmFCLqtUU%2BmszuDLp5DD59%2FoFzQd8uo6DCt9a2a%2Fy1JAX8Op4pZtu%2F2ll1qLkcA1D%2F16ooN8XrUiRutPPGnPW7KZwMuumclvUL4phCOPjCCvqRunKnzwWvef%2FZHTc0x7kjnPCDIyPzc%2FvFquzV8BKEaOxGvWUBnhuqOBg4TTuC%2FHL9o2PH74jZVe&X-Amz-Signature=cb916654ca0b1a1cc6997347efb1d82569290270c63596bdb39b92260f508abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

