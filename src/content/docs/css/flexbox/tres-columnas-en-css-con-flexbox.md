---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRQDRFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCXSy1c6dcBwnR28kZIa047dXK7K4WdIiko04LH4N2lgIgHp5BQM3Qztgy2w8e6e6NPdKrD4SXYSuEDdiyrdSpmzMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKahKvvDFyZPP9YzSSrcA2SoIul5LiX9TjeGmlRGdQ5lmcJ9phrL5gG8ekTN1zJb8nM%2Fw%2Fsk%2Fxqkgcae5RPbwggbcXVjl3L%2FZw6E6tjBOPQ0m7yfMX0VkGsCL8BowZS68uY6SW%2Fz8otfBZqnvv%2BrE6YXiWMo95azZhR%2F%2BKlTSAfFLSGhtJ9HxmPex2st4rne6FKxT%2B5EmnfAWUQOAmHIvVqVm1JbOT6FTqEW0ch3HapdvMwXsoPct79bB0LvRnzU16VoTglZk1SbMiBLBmbYIRLC3dfmQGW%2B%2Bj%2Bmd9WKeFedOHiGduyevA1YnA74RIoxcD7ADp8Gj8CVXnna3dLyi5cuCAV3DB1fjiEeoQDB0NyLnLNIeydGNJUEKR8TJeNOPhCDWlTQ2N6dBIm7vyTNpg00ET9iORN4nta4YDwTj8dsMr1e1eRHbZHRMtKeL3ljuyQh83F%2FUJmcmx86JVpnGusfVZEu7tft1PscwfzDMTMMizIZfxfWWEPkATD6G6u1eJoSWpMiLwCXOY5Is71TxqbVLjOwuNx4UGvIPmobK4BmTyNS1ZjgDX90TjQ1jejAMrYKncVmrpXfK3A60weOpCBWS0P5c1PxANt8yr6G9nU3tirtsg76rq48relnnJxIxYv4RzeKjNL2X6p9MKmX1MkGOqUBSlY%2B4oKi54L7Ba3VEXBckXFquh%2F54wmVTYnnT8TH4svuvYNT4WhQgW%2Fjmqzak4PAsS%2FRO2RVTsHrULVihDm4AHKwm30BruUlsYXc%2FaLq6bIG5RXJsskQ9BHxMnPkVMLw55btHgGicX3qZAlTTZZlnO%2BMWdAlpCIfADxCklVNGRz47A9YlDXoMrWXhq0LwoA6mGGBwGlvdKe%2FUgRuzvlz8g%2BbzKB8&X-Amz-Signature=51d45b29409086b8358853f6d9437440defdf932845b053176db6dc15bdd9558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRQDRFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCXSy1c6dcBwnR28kZIa047dXK7K4WdIiko04LH4N2lgIgHp5BQM3Qztgy2w8e6e6NPdKrD4SXYSuEDdiyrdSpmzMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKahKvvDFyZPP9YzSSrcA2SoIul5LiX9TjeGmlRGdQ5lmcJ9phrL5gG8ekTN1zJb8nM%2Fw%2Fsk%2Fxqkgcae5RPbwggbcXVjl3L%2FZw6E6tjBOPQ0m7yfMX0VkGsCL8BowZS68uY6SW%2Fz8otfBZqnvv%2BrE6YXiWMo95azZhR%2F%2BKlTSAfFLSGhtJ9HxmPex2st4rne6FKxT%2B5EmnfAWUQOAmHIvVqVm1JbOT6FTqEW0ch3HapdvMwXsoPct79bB0LvRnzU16VoTglZk1SbMiBLBmbYIRLC3dfmQGW%2B%2Bj%2Bmd9WKeFedOHiGduyevA1YnA74RIoxcD7ADp8Gj8CVXnna3dLyi5cuCAV3DB1fjiEeoQDB0NyLnLNIeydGNJUEKR8TJeNOPhCDWlTQ2N6dBIm7vyTNpg00ET9iORN4nta4YDwTj8dsMr1e1eRHbZHRMtKeL3ljuyQh83F%2FUJmcmx86JVpnGusfVZEu7tft1PscwfzDMTMMizIZfxfWWEPkATD6G6u1eJoSWpMiLwCXOY5Is71TxqbVLjOwuNx4UGvIPmobK4BmTyNS1ZjgDX90TjQ1jejAMrYKncVmrpXfK3A60weOpCBWS0P5c1PxANt8yr6G9nU3tirtsg76rq48relnnJxIxYv4RzeKjNL2X6p9MKmX1MkGOqUBSlY%2B4oKi54L7Ba3VEXBckXFquh%2F54wmVTYnnT8TH4svuvYNT4WhQgW%2Fjmqzak4PAsS%2FRO2RVTsHrULVihDm4AHKwm30BruUlsYXc%2FaLq6bIG5RXJsskQ9BHxMnPkVMLw55btHgGicX3qZAlTTZZlnO%2BMWdAlpCIfADxCklVNGRz47A9YlDXoMrWXhq0LwoA6mGGBwGlvdKe%2FUgRuzvlz8g%2BbzKB8&X-Amz-Signature=f95e04f7f489bc69c54274cef660bcdc9fdeafe72284f7f8c5093bedb8422f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

