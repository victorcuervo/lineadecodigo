---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENRWC2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdGBfgN8EmD%2Bv7H7qFeL182WRpddT7TO7JaYvcUjBqwIgd2WyZKfcSTrYo7o4w89FVCNPHQ6mrRcJGOJ%2B1TQRP1Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJwPfgh9hwHeAndS7ircA7r7%2BnwkGAmETZVXdgdukP%2BZweA%2BYDxQaCdgJOVSARlNwKvfL72vZ0BWVGx4sINjp9qX1l2%2FUVO%2F34whoH12YwRTRLNUWMalhImvXoF81vZCasWC%2FE2ZPj8kLKSHpEDU7QHFkZa6X%2Bzt9faoN1ntW7TG6PB8mozVQcrDXcMru3Mbc2apZXsHUS17agcQpLZA%2BMKuOZFCYIFRjCl8%2FAofAGDR6MCtRuGbjmsg3Oc81YgjLG8Ek1m0K0xX6Uetwd5xqJft03Yomj5Es0tGvM9tmX71Houo2HIZid%2F5K%2FQkyV7FQHO5DhgIW11apbnd84VCbaRgx8Dd6srGA5tq3aofRGZpGaD6idvmz%2BeqqqRoSDqhpBQywSoV512GSdP5Ev6EBHd6xh2qMqMxdU%2FWj5NkpWFJoQrfqHiux8bZz09Paa1qGfCtg73u2lj3QKCG5Ym21TbBZMdch2UrtnIfzBMVTQQXK83aLfM%2FNSAnI1aAZ13%2BqZPh%2BwKTklnGBGeLJgVtrmJEy8%2Bv7FxPIUoaJNqfV4Mr%2BoVyvul2PXgxtuGRm9UoWsleO4NpIKwCFctlC4ZLCpj%2FY6WmY7%2BALnhA7Ojik5ZEqvGpUIvKOyfaKdHeDyCJ6oO8p6J7zWG0VAjWMMmez8kGOqUB%2FJaFPx%2BGH5rjFE91nD65JQ5ZMCAmBK9h0TozQmxtUG5EfC0ceG3OaBin71VC%2BD80cIYk887yhtwsMkhNQpbpOxB40kw%2B3qCRGCLnxloeJlZqV9W%2BSbpr4KgCyfyLn4LJpu00EgUdea%2FJtQdqGE8EGUUd1ca5g7AEMAd%2F0TjG7%2BYPi6wb%2FgZuVcK%2F%2BSWSBZeUV%2FOk5JHYUjm5HMnhQ5FmAHsBjt1v&X-Amz-Signature=f564bbbc4fced4b9d44609dd427a9ddacf3a73aa8f93cb5124a216f395d069a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENRWC2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdGBfgN8EmD%2Bv7H7qFeL182WRpddT7TO7JaYvcUjBqwIgd2WyZKfcSTrYo7o4w89FVCNPHQ6mrRcJGOJ%2B1TQRP1Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJwPfgh9hwHeAndS7ircA7r7%2BnwkGAmETZVXdgdukP%2BZweA%2BYDxQaCdgJOVSARlNwKvfL72vZ0BWVGx4sINjp9qX1l2%2FUVO%2F34whoH12YwRTRLNUWMalhImvXoF81vZCasWC%2FE2ZPj8kLKSHpEDU7QHFkZa6X%2Bzt9faoN1ntW7TG6PB8mozVQcrDXcMru3Mbc2apZXsHUS17agcQpLZA%2BMKuOZFCYIFRjCl8%2FAofAGDR6MCtRuGbjmsg3Oc81YgjLG8Ek1m0K0xX6Uetwd5xqJft03Yomj5Es0tGvM9tmX71Houo2HIZid%2F5K%2FQkyV7FQHO5DhgIW11apbnd84VCbaRgx8Dd6srGA5tq3aofRGZpGaD6idvmz%2BeqqqRoSDqhpBQywSoV512GSdP5Ev6EBHd6xh2qMqMxdU%2FWj5NkpWFJoQrfqHiux8bZz09Paa1qGfCtg73u2lj3QKCG5Ym21TbBZMdch2UrtnIfzBMVTQQXK83aLfM%2FNSAnI1aAZ13%2BqZPh%2BwKTklnGBGeLJgVtrmJEy8%2Bv7FxPIUoaJNqfV4Mr%2BoVyvul2PXgxtuGRm9UoWsleO4NpIKwCFctlC4ZLCpj%2FY6WmY7%2BALnhA7Ojik5ZEqvGpUIvKOyfaKdHeDyCJ6oO8p6J7zWG0VAjWMMmez8kGOqUB%2FJaFPx%2BGH5rjFE91nD65JQ5ZMCAmBK9h0TozQmxtUG5EfC0ceG3OaBin71VC%2BD80cIYk887yhtwsMkhNQpbpOxB40kw%2B3qCRGCLnxloeJlZqV9W%2BSbpr4KgCyfyLn4LJpu00EgUdea%2FJtQdqGE8EGUUd1ca5g7AEMAd%2F0TjG7%2BYPi6wb%2FgZuVcK%2F%2BSWSBZeUV%2FOk5JHYUjm5HMnhQ5FmAHsBjt1v&X-Amz-Signature=9b025a43713bdf95b7ec8740c8bfa5f5951a3d39b1488fe37a64f87fb067b408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

