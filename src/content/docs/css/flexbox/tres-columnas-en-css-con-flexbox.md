---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECV53SC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvW83xcjd2CTHOM%2BqL0y0JnPuNFVxsuxFPsX9J2JQhAIhAP6fRN%2BWE6KyMZLz5drY56q%2F1Y97GvmkAogr2Mh60g%2BXKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmWaHELuWvCTOSAoq3APS4GrKh7bz%2BjPzTB8vonpBRkDeVulDKIwS3vGxBAvL2P%2FX504nhL7gMfaU5Y3yLFjA3I2t3YF%2BA%2FKxTNq%2FnuYhNTBmHfT5rNTh%2B38V69jhNUqQCes7wfp%2BkGrh97tT5rFNczPhi8ozzdLfpUCW6HASA%2FQeaOxmJLFj%2FXzKwC39tIl%2BacMZytqBVBbnka2ne%2FoxMWYYSfwkU%2Ba9BD6QWfDL3MZ6tafZ9%2BXXyepFvPQ5R0mEAXKwlRm3VNEuPDQlxqJpL5j26lmmtLTU8IrCEoqNJS%2FfB7fVczh463l39Li7uD4zguIIgxmJDycfq9QokAJwyBpxnECa2xjYPZvupkZbFA4JlyIGnUKCVYK8awG60BMLeHXlqR1qLJbicmNEN1LdzvKJdqIbqsxIDNDaR2XY%2F1BgdFhmes2zrgf0zzL%2FaO1%2FCJQqdm7wI2XYhsPqsDpha8FmMDdKmbO5wlQj64T2dXiBQHwU5WvzU5jAx08XEMmmABnKfEmN4rF%2F97lH3eYhfYbKP0VVVTs21iVLfNRqcCsLVZb%2BsMJ7iIubH734KiEkG9y%2B1P5hj7Zw85V0rY0gyeGuW9ucXGuf22Drk9uuX2JzjjF4qPoz2iECVdDQH%2FxvDej8fWaqhsQoPDDc0djJBjqkASAi2CIRx1%2Bichvkq9WliTc5K8SYI4%2FoJ3NWS6tEU8f63av8%2FMRFzV1%2BafL0yDdZOYVsgw%2Bo6SNWgZoTL1a%2BI%2FFk2Fx0ENJKjZXLr0hwjedHcwNrkY4UyU0Y%2BXyhsfiiLLJ1NLTallKXYx6Rtqqn5VZoMumfyb30mRqzXH7n8K%2BuGZF32kUd1QoA7bGZBFbcfgg2n%2F%2B8vvAxFdwsgjj88TCmDTDE&X-Amz-Signature=1a91eda3efc951dfa8237bf60ab42abff38279fe4f290b9acd4d20b4beb1b10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECV53SC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvW83xcjd2CTHOM%2BqL0y0JnPuNFVxsuxFPsX9J2JQhAIhAP6fRN%2BWE6KyMZLz5drY56q%2F1Y97GvmkAogr2Mh60g%2BXKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTmWaHELuWvCTOSAoq3APS4GrKh7bz%2BjPzTB8vonpBRkDeVulDKIwS3vGxBAvL2P%2FX504nhL7gMfaU5Y3yLFjA3I2t3YF%2BA%2FKxTNq%2FnuYhNTBmHfT5rNTh%2B38V69jhNUqQCes7wfp%2BkGrh97tT5rFNczPhi8ozzdLfpUCW6HASA%2FQeaOxmJLFj%2FXzKwC39tIl%2BacMZytqBVBbnka2ne%2FoxMWYYSfwkU%2Ba9BD6QWfDL3MZ6tafZ9%2BXXyepFvPQ5R0mEAXKwlRm3VNEuPDQlxqJpL5j26lmmtLTU8IrCEoqNJS%2FfB7fVczh463l39Li7uD4zguIIgxmJDycfq9QokAJwyBpxnECa2xjYPZvupkZbFA4JlyIGnUKCVYK8awG60BMLeHXlqR1qLJbicmNEN1LdzvKJdqIbqsxIDNDaR2XY%2F1BgdFhmes2zrgf0zzL%2FaO1%2FCJQqdm7wI2XYhsPqsDpha8FmMDdKmbO5wlQj64T2dXiBQHwU5WvzU5jAx08XEMmmABnKfEmN4rF%2F97lH3eYhfYbKP0VVVTs21iVLfNRqcCsLVZb%2BsMJ7iIubH734KiEkG9y%2B1P5hj7Zw85V0rY0gyeGuW9ucXGuf22Drk9uuX2JzjjF4qPoz2iECVdDQH%2FxvDej8fWaqhsQoPDDc0djJBjqkASAi2CIRx1%2Bichvkq9WliTc5K8SYI4%2FoJ3NWS6tEU8f63av8%2FMRFzV1%2BafL0yDdZOYVsgw%2Bo6SNWgZoTL1a%2BI%2FFk2Fx0ENJKjZXLr0hwjedHcwNrkY4UyU0Y%2BXyhsfiiLLJ1NLTallKXYx6Rtqqn5VZoMumfyb30mRqzXH7n8K%2BuGZF32kUd1QoA7bGZBFbcfgg2n%2F%2B8vvAxFdwsgjj88TCmDTDE&X-Amz-Signature=6f5bfcb1e51403dd4202936f053e88324341251b72e4bf20da507829ab00fe83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

