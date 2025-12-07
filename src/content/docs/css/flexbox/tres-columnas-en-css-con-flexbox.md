---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2TCSES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPayv8b2ak5nNApkIHzZmdiNfgpypumKQyCZNY7hRj6AiEA4DNVfp73q9RaDLNh%2BZdlX3HRrAT0i2amPtJTdwc0aCYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACm9cCeGdoKlkaWGSrcA2uG5UZ4WrGLBv65Zmh83VpgE%2FCW8Sy1YbdRolwenPmKG%2BuqJ5ITcHXOVJZreQoDDHdiAXuHaFrTwOuQoVk14Ma%2BXFzmqaKKryqpMbHLLcl2sLBxA7%2BtiCkTdY3RQ4a0J3AgSosJKZbyf8w%2FYblHj3KZ8XAv%2B3Hwc2WkpNRhL%2Buib9H%2FuQmjNEUO0F%2BuSnEqG2bc8NtWuQeJ%2B6k8nnuMri58e%2Bj3CCfTEQ1jzopa1K2coh5kPvrztpZC8bOTAzZgXewpoK%2BxhxbMeH3SYAshWOvmOrAAcT%2Bq48%2BKnCXdOq30Nh1E23Nq5pIcMZQRfKx8X%2B5r6BhSPsilZPkTqEFY88cxpHivGMztkhqbjntzvzXvyP%2FX5EasLhf6vcrkziwzFK%2FOtM4UFVS4yNZuKQClMWl2YP0XjUmaX2e7JTtwpMkbTft6Uv%2FpFWeJ4rt7ED%2F5yPISgWTFEeRSdallXWkBbxo%2FyiNb2IVU%2Fb4A9cQ3l%2BJ9eN8YnLcjilC95cCAHW52HlxNPTQ0EMTT6CtSvDqSIl6dhNbM%2F723UA2P7aXezTROJPFuwG%2Fne%2BScTxIlmqQv49tvx3fcqHCktInSIH9uOlB1WdqBtPObfxCa64EnN%2Fq5uOPdjNRzcgA39utRMOyo18kGOqUB8GRFmlrtvVv9PNvR8oQRQ04OwAOYMrBU9m0SPLYMxbBZmNufMIndEySvTctasTq4tBT8hOmmSNL4X%2Bkjiw%2FP5rKJLGHe5QR14fv%2Bsd9aJ7oKwLVdn%2FIs8soMbolKu%2BbzIKIDr0VbpWZa3z6wnxP4KXmGEUPq0gkZGBiYZ6DAe2PsDIRkZFyj3PGzc5Rla920Xhf9szEAp30J0PPIHrNAzcTbnBKW&X-Amz-Signature=7bdb4722faf126d275354c2b16dd27982659d7e9f663ad67981b6b94c8a47c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2TCSES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPayv8b2ak5nNApkIHzZmdiNfgpypumKQyCZNY7hRj6AiEA4DNVfp73q9RaDLNh%2BZdlX3HRrAT0i2amPtJTdwc0aCYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACm9cCeGdoKlkaWGSrcA2uG5UZ4WrGLBv65Zmh83VpgE%2FCW8Sy1YbdRolwenPmKG%2BuqJ5ITcHXOVJZreQoDDHdiAXuHaFrTwOuQoVk14Ma%2BXFzmqaKKryqpMbHLLcl2sLBxA7%2BtiCkTdY3RQ4a0J3AgSosJKZbyf8w%2FYblHj3KZ8XAv%2B3Hwc2WkpNRhL%2Buib9H%2FuQmjNEUO0F%2BuSnEqG2bc8NtWuQeJ%2B6k8nnuMri58e%2Bj3CCfTEQ1jzopa1K2coh5kPvrztpZC8bOTAzZgXewpoK%2BxhxbMeH3SYAshWOvmOrAAcT%2Bq48%2BKnCXdOq30Nh1E23Nq5pIcMZQRfKx8X%2B5r6BhSPsilZPkTqEFY88cxpHivGMztkhqbjntzvzXvyP%2FX5EasLhf6vcrkziwzFK%2FOtM4UFVS4yNZuKQClMWl2YP0XjUmaX2e7JTtwpMkbTft6Uv%2FpFWeJ4rt7ED%2F5yPISgWTFEeRSdallXWkBbxo%2FyiNb2IVU%2Fb4A9cQ3l%2BJ9eN8YnLcjilC95cCAHW52HlxNPTQ0EMTT6CtSvDqSIl6dhNbM%2F723UA2P7aXezTROJPFuwG%2Fne%2BScTxIlmqQv49tvx3fcqHCktInSIH9uOlB1WdqBtPObfxCa64EnN%2Fq5uOPdjNRzcgA39utRMOyo18kGOqUB8GRFmlrtvVv9PNvR8oQRQ04OwAOYMrBU9m0SPLYMxbBZmNufMIndEySvTctasTq4tBT8hOmmSNL4X%2Bkjiw%2FP5rKJLGHe5QR14fv%2Bsd9aJ7oKwLVdn%2FIs8soMbolKu%2BbzIKIDr0VbpWZa3z6wnxP4KXmGEUPq0gkZGBiYZ6DAe2PsDIRkZFyj3PGzc5Rla920Xhf9szEAp30J0PPIHrNAzcTbnBKW&X-Amz-Signature=28db9850f3eeeca47331eda0adbd90cd288fb2f23ade37198bab632d1bd89766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

