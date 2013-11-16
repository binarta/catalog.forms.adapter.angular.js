describe('catalog.forms.adapter', function () {
    beforeEach(module('catalog.forms.adapter'));

    describe('field adapter directive', function() {
        var directive;

        beforeEach(inject(function($injector, topicRegistry, topicMessageDispatcher) {
            directive = CatalogFormsFieldAdapterFactory(topicRegistry, topicMessageDispatcher);
        }));

        it('restricted to', function() {
            expect(directive.restrict).toEqual('AC');
        });

        describe('when linked', function() {
            beforeEach(function() {
                directive.link();
            });

            describe('on catalog.item.updated notification received', function() {
                var topics, payload;

                beforeEach(inject(function(topicRegistryMock, topicMessageDispatcherMock) {
                    topics = topicMessageDispatcherMock;
                    payload = 'payload';
                    topicRegistryMock['catalog.item.updated'](payload);
                }));

                it('raise form.field.updated notifications', function() {
                    expect(topics['form.field.updated']).toEqual(payload);
                });
            });
        });
    });
});
