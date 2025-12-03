---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPBCF53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGQvAhfRhOmMpGGTnYFTHn7FqxapD1cJAJs2ElS%2FEuosAiEA4wCQwhi48Ds%2FmQCpm2QnRIP4X5%2FBGUSidCyrlZumHBIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMbXBWoGiEn5lv4jCircA0YRNInBxhoGh6SosxLT1g11FxcLIvPcdIcUEDNPCLk79lgj%2Fqlr6duV0hydvDFFw%2B9uesUKFY8ctrnDDDOOUQ1eBxijIka3Avdi1y29gxz9NjR2UKLgdkPhzEAkqOvXYfy5xFIGWFVP3Eo7aPBsLybIruDX8q8tZqqsHu8W6trDlo7yC%2FPzCk0Vn8LPf73eZfTbFQJJMtKTbxVNPMOqDg4pTr1sGUfVnWnWzMlo9aboT69kdqc%2BHKBbhk1%2Bj2KMpMUbBAUQb2lthQpZE9%2BwG24aQizSsi8lbcGH4d%2BnXk4rr%2FceRF8%2F4VdNTi8HUQLSsapvEek60Q80YavdmeyR54vYbzbC2ey7Kg2AX4j342EAxsElWKwPEvR%2B935vpHhdG49KIaFR5B19uuuUdLX8WntueXEAAhj19LEKxCsN9YOp9W%2Fx1ZPhnl60ctb1AinP9Sv99NL4hOwVvHQTxSMEzg3e7Im5WoKII3JGKUWzM06cTLcRDnr3%2Fw6qcXIurCHsa0DcIMcc1sOsHvRjhIH2fAp3BdwjQQh568cnkZMjMqv0YO5LmrMjar2xPVtynVTJ5L5ef4oBU3EmHM%2BqHhwrImasJtRlDMEiVKH%2F5ObJz1dY9RqN9YbTeYNsxp7mMOvUv8kGOqUB7xfVzF9ats05TQl677Ij%2Bk0lXv%2BpjVWtcOUU896JYmBcFfD5B659C8DZD%2FG2zirPlSlLwVcbaEh80%2FMAInAtXy7noXMsy6tYDqx4jO6pC7nbNcod6oprfrjHwrqfdQltcLcwsgJEpaaX3dpn4gkbb1Ukny8OBvepkHOmCtFQGTYaa%2BZFXmCUzo4R%2Fex3PZhANoVdN46IEUCIPuvmxowqw1%2B8cF31&X-Amz-Signature=9099f6230b71f61d9240ec29c68466cc777df46c6f30e94bc00dd44550485147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPBCF53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGQvAhfRhOmMpGGTnYFTHn7FqxapD1cJAJs2ElS%2FEuosAiEA4wCQwhi48Ds%2FmQCpm2QnRIP4X5%2FBGUSidCyrlZumHBIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMbXBWoGiEn5lv4jCircA0YRNInBxhoGh6SosxLT1g11FxcLIvPcdIcUEDNPCLk79lgj%2Fqlr6duV0hydvDFFw%2B9uesUKFY8ctrnDDDOOUQ1eBxijIka3Avdi1y29gxz9NjR2UKLgdkPhzEAkqOvXYfy5xFIGWFVP3Eo7aPBsLybIruDX8q8tZqqsHu8W6trDlo7yC%2FPzCk0Vn8LPf73eZfTbFQJJMtKTbxVNPMOqDg4pTr1sGUfVnWnWzMlo9aboT69kdqc%2BHKBbhk1%2Bj2KMpMUbBAUQb2lthQpZE9%2BwG24aQizSsi8lbcGH4d%2BnXk4rr%2FceRF8%2F4VdNTi8HUQLSsapvEek60Q80YavdmeyR54vYbzbC2ey7Kg2AX4j342EAxsElWKwPEvR%2B935vpHhdG49KIaFR5B19uuuUdLX8WntueXEAAhj19LEKxCsN9YOp9W%2Fx1ZPhnl60ctb1AinP9Sv99NL4hOwVvHQTxSMEzg3e7Im5WoKII3JGKUWzM06cTLcRDnr3%2Fw6qcXIurCHsa0DcIMcc1sOsHvRjhIH2fAp3BdwjQQh568cnkZMjMqv0YO5LmrMjar2xPVtynVTJ5L5ef4oBU3EmHM%2BqHhwrImasJtRlDMEiVKH%2F5ObJz1dY9RqN9YbTeYNsxp7mMOvUv8kGOqUB7xfVzF9ats05TQl677Ij%2Bk0lXv%2BpjVWtcOUU896JYmBcFfD5B659C8DZD%2FG2zirPlSlLwVcbaEh80%2FMAInAtXy7noXMsy6tYDqx4jO6pC7nbNcod6oprfrjHwrqfdQltcLcwsgJEpaaX3dpn4gkbb1Ukny8OBvepkHOmCtFQGTYaa%2BZFXmCUzo4R%2Fex3PZhANoVdN46IEUCIPuvmxowqw1%2B8cF31&X-Amz-Signature=1d7d41fe12d65403e90579080f113c4db81eb4f736745430b95f58cef047a432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

